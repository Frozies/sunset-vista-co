"use client"

import {useForm} from "react-hook-form";
import { FaRegHandshake } from "react-icons/fa6";

export type FormData = {
    name: string; email: string; message: string; phone?: string;
};

const Contact = () => {
    const {register, handleSubmit} = useForm<FormData>();

    async function onSubmit(data: FormData) {
        const fullMessage = data.message + (data.phone ? `\nPhone: ${data.phone}` : "");
        await fetch('/api/email', {
            method: 'POST', headers: {
                'Content-Type': 'application/json',
            }, body: JSON.stringify({ ...data, message: fullMessage }),
        }).then((res) => res.json())
            .then((response) => {
                alert(response.message);
            })
            .catch((err) => {
                alert(err);
            });
    }

    return (
        <section className="relative py-24 md:py-36 bg-gradient-to-br from-[#fffbe6] via-[#ffe0b2] to-[#ffb347] overflow-hidden" id="contact">
            <div className="absolute top-[-60px] left-[-80px] w-[340px] h-[220px] bg-[#F0C244]/30 rounded-full blur-3xl z-0" />
            <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center">
                <div className="max-w-2xl w-full space-y-8 bg-white/90 rounded-2xl shadow-2xl border border-[#F0C244]/20 p-8 md:p-12 flex flex-col items-center">
                    <div className="flex flex-col items-center gap-2">
                        <FaRegHandshake className="w-10 h-10 text-[#F0C244] mb-2" />
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] mb-2 drop-shadow-lg">Let’s Connect</h2>
                        <p className="text-lg md:text-xl text-gray-700 text-center max-w-xl font-medium">
                            Ready to start your next project or have questions? Fill out the form and we’ll get back to you fast.
                        </p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full grid gap-6">
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="grid gap-2">
                                <label htmlFor="name" className="block text-base font-semibold text-[#222] mb-1">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full rounded-lg border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-[#F0C244] focus:shadow-md"
                                    {...register('name', {required: true})}
                                />
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="email" className="block text-base font-semibold text-[#222] mb-1">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full rounded-lg border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-[#F0C244] focus:shadow-md"
                                    {...register('email', {required: true})}
                                />
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="phone" className="block text-base font-semibold text-[#222] mb-1">
                                    Phone (optional)
                                </label>
                                <input
                                    id="phone"
                                    type="tel"
                                    placeholder="Enter your phone number"
                                    className="w-full rounded-lg border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-[#F0C244] focus:shadow-md"
                                    {...register('phone')}
                                />
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <label htmlFor="message" className="mb-2 block text-base font-semibold text-[#222]">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                placeholder="Tell us about your project"
                                className="w-full resize-none rounded-lg border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-[#F0C244] focus:shadow-md"
                                {...register('message', {required: true})}
                            ></textarea>
                        </div>
                        <button
                            className="hover:shadow-lg rounded-full bg-[#F0C244] py-4 px-10 text-lg font-bold text-white outline-none transition hover:bg-[#EC7210] focus:ring-2 focus:ring-[#F0C244] focus:ring-offset-2"
                            type="submit">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;