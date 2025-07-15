import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function Contact() {
  return (
    <section id="contact" className="py-16">
      <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 mt-1 text-primary" />
              <div>
                <h4 className="font-medium">Email</h4>
                <p className="text-muted-foreground">contact@example.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 mt-1 text-primary" />
              <div>
                <h4 className="font-medium">Phone</h4>
                <p className="text-muted-foreground">+1 (123) 456-7890</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 mt-1 text-primary" />
              <div>
                <h4 className="font-medium">Location</h4>
                <p className="text-muted-foreground">
                  San Francisco, California
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Your message" rows={5} />
            </div>

            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
