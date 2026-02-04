import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's Build Something <span className="gradient-text">Amazing</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Open to Azure Cloud Architect, Platform Architect, and Cloud
            Transformation roles. Let's discuss how I can help modernize your
            cloud infrastructure.
          </p>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <motion.a
              href="mailto:gowrish@outlook.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:glow-accent transition-all duration-300"
            >
              <Mail className="w-6 h-6 text-primary mb-3 mx-auto" />
              <p className="text-sm text-muted-foreground mb-1">Email</p>
              <p className="font-medium text-sm group-hover:text-primary transition-colors">
                gowrish@outlook.com
              </p>
            </motion.a>

            <motion.a
              href="tel:+491629760840"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="group p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:glow-accent transition-all duration-300"
            >
              <Phone className="w-6 h-6 text-primary mb-3 mx-auto" />
              <p className="text-sm text-muted-foreground mb-1">Phone</p>
              <p className="font-medium text-sm group-hover:text-primary transition-colors">
                +49 162 976 0840
              </p>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/gowrishacv"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              className="group p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:glow-accent transition-all duration-300"
            >
              <Linkedin className="w-6 h-6 text-primary mb-3 mx-auto" />
              <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
              <p className="font-medium text-sm group-hover:text-primary transition-colors flex items-center justify-center gap-1">
                /in/gowrishacv
                <ArrowUpRight className="w-3 h-3" />
              </p>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm"
            >
              <MapPin className="w-6 h-6 text-primary mb-3 mx-auto" />
              <p className="text-sm text-muted-foreground mb-1">Location</p>
              <p className="font-medium text-sm">Greater Düsseldorf</p>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:gowrish@outlook.com">
                <Mail className="w-4 h-4 mr-2" />
                Start a Conversation
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-border">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Gowrisha C. Vishwa Kumar. Built with
            passion for cloud architecture.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
