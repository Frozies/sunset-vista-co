"use client"

import {useForm} from "react-hook-form";

export type FormData = {
    name: string; email: string; message: string;
};

const Contact = () => {
    const {register, handleSubmit} = useForm<FormData>();

    async function onSubmit(data: FormData) {
        await fetch('/api/email', {
            method: 'POST', headers: {
                'Content-Type': 'application/json',
            }, body: JSON.stringify(data),
        }).then((res) => res.json())
            .then((response) => {
                alert(response.message);
            })
            .catch((err) => {
                alert(err);
            });
    }

    return (<section className="bg-white py-20 md:py-32" id="contact">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
            <div className="max-w-2xl space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-[#F0C244]">Get in Touch</h2>
                <p className="text-lg md:text-xl">
                    Have a project in mind? Let&apos;s discuss how we can help.
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <label htmlFor="name" className="mb-3 block text-base font-medium text-black">
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                                className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-[#F0C244] focus:shadow-md"
                                {...register('name', {required: true})}
                            />
                        </div>
                        <div className="grid gap-2">
                            <label htmlFor="email" className="mb-3 block text-base font-medium text-black">
                                Email
                            </label>
                            <input
                                id="email"
                                type="text"
                                placeholder="Enter your email"
                                className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-[#F0C244] focus:shadow-md"
                                {...register('email', {required: true})}
                            />
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <label htmlFor="message" className="mb-3 block text-base font-medium text-black">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows={4}
                            placeholder="Tell us about your project"
                            className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-[#F0C244] focus:shadow-md"
                            {...register('message', {required: true})}
                        ></textarea>
                    </div>
                    <button
                        className="hover:shadow-form rounded-md bg-[#F0C244] py-3 px-8 text-base font-semibold text-white outline-none"
                        type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </section>);
}

export default Contact;