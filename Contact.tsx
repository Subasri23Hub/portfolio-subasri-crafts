import { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import CodeSnippet from './CodeSnippet';
import ContactForm from './ContactForm';

const Contact = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const contactCode = `# contact.py
class Contact:
    def __init__(self):
        self.email = "shubkutt23@gmail.com"
        self.linkedin = "subasri-b-84839236b" 
        self.github = "Subasri23Hub"
        self.status = "🟢 Available"
    
    def connect(self):
        return "Ready to collaborate!"

# Let's build together! 🚀`;

  const opportunities = [
    {
      title: "Software Engineering Roles",
      description: "Full-time positions in product development, AI/ML, and backend systems",
      icon: "💼"
    },
    {
      title: "Project Collaborations",
      description: "Open source contributions and innovative product development",
      icon: "🤝"
    },
    {
      title: "Technical Consulting",
      description: "AI implementation, automation solutions, and system architecture",
      icon: "💡"
    },
    {
      title: "Mentoring & Speaking",
      description: "Knowledge sharing in AI, software development, and career guidance",
      icon: "🎤"
    }
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "shubkutt23@gmail.com",
      description: "Best for detailed discussions and formal inquiries",
      action: () => window.open('mailto:shubkutt23@gmail.com'),
      color: "text-primary"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "subasri-b-84839236b",
      description: "Professional networking and career opportunities",
      action: () => window.open('https://linkedin.com/in/subasri-b-84839236b', '_blank'),
      color: "text-copper"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "Subasri23Hub",
      description: "Code collaboration and project discussions",
      action: () => window.open('https://github.com/Subasri23Hub', '_blank'),
      color: "text-gold"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/20 gradient-tech-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to collaborate and build innovative solutions together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Code Implementation */}
          <div>
            <h3 className="text-2xl font-bold mb-6 gradient-text">Contact Interface</h3>
            <CodeSnippet 
              code={contactCode}
              language="Python"
              title="contact_interface.py"
            />
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6 bg-gradient-card border-code-border">
              <h3 className="text-xl font-bold mb-4 gradient-text">
                Current Status
              </h3>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-primary font-semibold">Open to IT Opportunities</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Actively seeking roles in software engineering, AI/ML, and product development. 
                Available for immediate start and remote/hybrid positions.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-card border-code-border">
              <h3 className="text-xl font-bold mb-4 gradient-text">
                Response Time
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Calendar size={16} className="text-primary" />
                  <span className="text-sm">Email: Within 12 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-primary" />
                  <span className="text-sm">Location: India (Remote/Hybrid available)</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
            How to Reach Me
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="p-6 bg-gradient-card border-code-border hover:glow transition-all duration-300 cursor-pointer group" onClick={method.action}>
                <div className="text-center">
                  <div className="mb-4">
                    <method.icon className={`${method.color} mx-auto group-hover:scale-110 transition-transform`} size={32} />
                  </div>
                  <h4 className="font-bold text-lg mb-2">{method.title}</h4>
                  <p className="text-primary font-mono text-sm mb-3">{method.value}</p>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {method.description}
                  </p>
                  <Button className="mt-4 w-full bg-muted hover:bg-accent text-foreground border-0">
                    Contact via {method.title}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Opportunities */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
            Open to Opportunities
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {opportunities.map((opportunity, index) => (
              <Card key={index} className="p-6 bg-gradient-card border-code-border">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">{opportunity.icon}</span>
                  <div>
                    <h4 className="font-bold text-lg mb-2">{opportunity.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {opportunity.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="p-8 bg-gradient-card border-code-border text-center">
          <h3 className="text-2xl font-bold mb-4 gradient-text">
            Let's Build Something Amazing Together
          </h3>
          <p className="text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
            Whether you're looking for a dedicated software engineer, need AI/ML expertise, 
            or want to collaborate on innovative projects, I'm excited to contribute to your team's success.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              onClick={() => setIsFormOpen(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Mail size={16} className="mr-2" />
              Start a Conversation
            </Button>
            
            <Button 
              onClick={() => window.open('https://linkedin.com/in/subasri-b-84839236b', '_blank')}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Linkedin size={16} className="mr-2" />
              Connect on LinkedIn
            </Button>
          </div>
        </Card>
        
        <ContactForm 
          isOpen={isFormOpen} 
          onClose={() => setIsFormOpen(false)} 
        />
      </div>
    </section>
  );
};

export default Contact;
