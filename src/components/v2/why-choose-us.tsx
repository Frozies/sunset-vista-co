import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Award, HandHeart } from "lucide-react"

const benefits = [
    {
        icon: Users,
        title: "Local SWFL Experts",
        description: "We understand the Cape Coral, Fort Myers, and Naples market better than anyone.",
    },
    {
        icon: HandHeart,
        title: "Real In-Person Support",
        description: "Meet face-to-face, get hands-on help, and work with real people who care about your success.",
    },
    {
        icon: CheckCircle,
        title: "No Tech Jargon",
        description: "We explain everything in plain English so you understand exactly what we're doing.",
    },
    {
        icon: Award,
        title: "Proven Track Record",
        description: "Over 100 successful projects with measurable results and happy clients.",
    },
]

export function WhyChooseUs() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Why SWFL Businesses Choose Us</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
                        We&#39;re not just another digital marketing agency. We&#39;re your local partners who meet you in person.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit, index) => (
                        <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6">
                                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                    <benefit.icon className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="font-semibold text-lg mb-3">{benefit.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
