import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [activeCategory, setActiveCategory] = useState('General');

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        // GENERAL (10 Questions)
        {
            question: "Where is Panchal Engitech located?",
            answer: "We are headquartered at 307, GIDC, Ichchhapore Bhatpore, Surat, Gujarat. We serve clients across the Gujarat region and neighboring areas.",
            category: "General"
        },
        {
            question: "How can I request a quote for my project?",
            answer: "You can request a quote by filling out the form on our 'Contact' page, emailing us at panchalengitech.co@gmail.com, or calling us directly at +91 8460554268.",
            category: "General"
        },
        {
            question: "Are you a licensed and insured company?",
            answer: "Yes, Panchal Engitech Pvt Ltd is a fully government-registered and insured company, complying with all safety and labor regulations.",
            category: "General"
        },
        {
            question: "What are your working hours?",
            answer: "Our corporate office and site teams operate from 9:00 AM to 6:00 PM, Monday to Saturday. However, for critical project phases, we can work extended shifts.",
            category: "General"
        },
        {
            question: "Do you take up projects outside Gujarat?",
            answer: "While our primary focus is Gujarat, we accept large-scale industrial projects in neighboring states depending on the project size and feasibility.",
            category: "General"
        },
        {
            question: "Can we visit your office for a consultation?",
            answer: "Absolutely! We welcome clients to our office for detailed discussions. Please schedule an appointment in advance to ensure the relevant technical team is available.",
            category: "General"
        },
        {
            question: "Do you charge for initial site visits?",
            answer: "Initial site inspections within Surat are typically complimentary. For locations further away, a nominal travel fee may apply, which is adjustable against the final contract.",
            category: "General"
        },
        {
            question: "What safety standards do you follow?",
            answer: "Safety is our priority. We strictly adhere to National Building Code (NBC) safety guidelines and provide necessary PPE to all our workers on-site.",
            category: "General"
        },
        {
            question: "Do you have a minimum project budget?",
            answer: "We strictly focus on quality industrial and premium residential work. While we don't have a rigid minimum, we are best suited for medium to large-scale projects.",
            category: "General"
        },
        {
            question: "Where can I see your past work?",
            answer: "You can view our 'Gallery' page for photos of completed projects. We can also arrange site visits to ongoing projects upon request.",
            category: "General"
        },

        // CIVIL CONSTRUCTION (10 Questions)
        {
            question: "What types of construction projects do you undertake?",
            answer: "We specialize in industrial and commercial construction, including factory sheds, warehouses, corporate offices, foundations for heavy machinery, and RCC structures.",
            category: "Civil Construction"
        },
        {
            question: "Do you provide material with labor (Turnkey) or just labor interact?",
            answer: "We offer flexible engagement models. We can provide complete turnkey solutions (Material + Labor) for peace of mind, or work on a labor-contract basis depending on your preference.",
            category: "Civil Construction"
        },
        {
            question: "How do you ensure the quality of construction?",
            answer: "We follow strict quality control protocols, employing experienced site engineers and using only tested, high-grade materials (cement, steel, aggregates) to ensure structural integrity.",
            category: "Civil Construction"
        },
        {
            question: "How long does a typical industrial shed construction take?",
            answer: "Timelines vary by size, but a standard 10,000 sq. ft. industrial shed typically takes 3-4 months from foundation to finishing, barring unforeseen delays.",
            category: "Civil Construction"
        },
        {
            question: "Do you handle government approvals and liaisoning?",
            answer: "We assist our clients with necessary technical drawings and structural stability certificates required for approvals, though the final liaisoning is usually handled by the client's architect.",
            category: "Civil Construction"
        },
        {
            question: "Can you renovate existing industrial buildings?",
            answer: "Yes, we specialize in industrial renovation including floor strengthening, roof replacement, and structural repairs to extend the life of your facility.",
            category: "Civil Construction"
        },
        {
            question: "What is the typical payment schedule for construction?",
            answer: "Payments are usually linked to project milestones (e.g., Plinth completion, Lintel level, Slab casting). A detailed schedule is agreed upon before signing the contract.",
            category: "Civil Construction"
        },
        {
            question: "Do you construct machine foundations?",
            answer: "Yes, we have extensive experience in building vibration-resistant heavy machine foundations tailored to specific machinery requirements.",
            category: "Civil Construction"
        },
        {
            question: "What cement brands do you use?",
            answer: "For structural work, we use premium brands like Ultratech, ACC, or Ambuja. For non-structural work, we use brands approved by the client or architect.",
            category: "Civil Construction"
        },
        {
            question: "Do you provide a warranty for your construction work?",
            answer: "Yes, we provide a defect liability period (usually 12 months) post-completion, during which any construction defects are rectified free of cost.",
            category: "Civil Construction"
        },

        // FABRICATION (10 Questions)
        {
            question: "Do you manufacture Pre-Engineered Buildings (PEB)?",
            answer: "Yes, we are experts in designing, fabricating, and erecting Pre-Engineered Buildings (PEB) for industrial units, ensuring durability and cost-efficiency.",
            category: "Fabrication"
        },
        {
            question: "Can you customize heavy steel structures?",
            answer: "Absolutely. We have a fully equipped workshop to handle custom heavy fabrication, including structural columns, beams, trusses, and storage tanks customized to your engineering drawings.",
            category: "Fabrication"
        },
        {
            question: "What grades of steel do you use?",
            answer: "We strictly use certified steel (IS:2062 Gr.A/B) from reputed primary steel manufacturers like Tata, SAIL, and JSW to ensure maximum safety.",
            category: "Fabrication"
        },
        {
            question: "Do you offer on-site fabrication services?",
            answer: "Yes, for large structures that cannot be transported, we mobilize our skilled fabrication crew and equipment to execute the work directly at your site.",
            category: "Fabrication"
        },
        {
            question: "What types of industrial gates do you make?",
            answer: "We fabricate heavy-duty sliding gates, cantilever gates, and motorized industrial entrance gates designed for high security and smooth operation.",
            category: "Fabrication"
        },
        {
            question: "Can you fabricate storage tanks and silos?",
            answer: "Yes, we customize mild steel (MS) and stainless steel (SS) storage tanks and silos for chemical, water, or grain storage applications.",
            category: "Fabrication"
        },
        {
            question: "What anti-corrosion treatments do you apply?",
            answer: "We apply standard red-oxide primer and enamel paint. For higher durability, we offer epoxy coating or hot-dip galvanizing options upon request.",
            category: "Fabrication"
        },
        {
            question: "Do you make fire escape staircases?",
            answer: "Yes, we design and fabricate safety-compliant external metal fire escape staircases for high-rise commercial and industrial buildings.",
            category: "Fabrication"
        },
        {
            question: "How do you handle heavy lifting during erection?",
            answer: "We own and rent heavy-duty cranes and lifting equipment. Our certified rigging team ensures safe and precise erection of heavy steel members.",
            category: "Fabrication"
        },
        {
            question: "Do you provide structural stability certificates?",
            answer: "For our PEB and structural fabrication works, we can provide stability certificates vetted by government-approved structural engineers.",
            category: "Fabrication"
        },

        // INTERIOR DESIGN (10 Questions)
        {
            question: "Do you handle residential or commercial interior projects?",
            answer: "We handle both! Our portfolio ranges from modern office interiors and industrial fit-outs to premium residential home designs.",
            category: "Interior Design"
        },
        {
            question: "What is your interior design process?",
            answer: "Our process starts with a consultation to understand your needs, followed by 2D/3D layout planning, material selection, and finally, execution by our skilled carpenters and technicians.",
            category: "Interior Design"
        },
        {
            question: "Do you provide 3D visualization before starting work?",
            answer: "Yes, we provide detailed 3D realistic renderings of the design, allowing you to visualize the final outcome and make changes before the actual work begins.",
            category: "Interior Design"
        },
        {
            question: "Do you have your own carpentry team?",
            answer: "Yes, we have an in-house team of skilled carpenters, electricians, and painters, allowing us to maintain high quality and meet deadlines without relying on subcontractors.",
            category: "Interior Design"
        },
        {
            question: "Can you design custom furniture?",
            answer: "Absolutely. We specialize in bespoke modular furniture, including wardrobes, office workstations, conference tables, and kitchen cabinets tailored to your space.",
            category: "Interior Design"
        },
        {
            question: "What is the estimated cost per square foot for interiors?",
            answer: "Costs vary widely based on material selection (plywood, laminate, veneer, etc.). We provide a detailed itemized quotation after our initial discussion and measurement.",
            category: "Interior Design"
        },
        {
            question: "Do you handle electrical and plumbing work in interiors?",
            answer: "Yes, we offer a comprehensive solution that includes electrical rewiring, lighting installation, and plumbing changes required for the new interior layout.",
            category: "Interior Design"
        },
        {
            question: "What materials do you recommend for office flooring?",
            answer: "For high-traffic offices, we recommend heavy-duty vitrified tiles, carpet tiles for acoustics, or epoxy flooring for industrial look and durability.",
            category: "Interior Design"
        },
        {
            question: "How long does a 3BHK interior project take?",
            answer: "A complete 3BHK turnkey interior project typically takes 60 to 90 days, depending on the complexity of designs and the scope of civil changes involved.",
            category: "Interior Design"
        },
        {
            question: "Do you offer post-completion maintenance?",
            answer: "Yes, we offer free service for minor adjustments (like hinge tightening) for 6 months after handover. We also take up annual maintenance contracts (AMC) for corporate offices.",
            category: "Interior Design"
        }
    ];

    const categories = ['General', 'Civil Construction', 'Fabrication', 'Interior Design'];

    const filteredFAQs = faqData.filter(item => item.category === activeCategory);

    return (
        <section className="faq-section">
            <div className="container">
                <div className="faq-header">
                    <h2>Frequently Asked Questions</h2>
                    <p>Find answers to common questions about our services, processes, and expertise.</p>
                </div>

                <div className="faq-category-filters">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`faq-filter-btn ${activeCategory === category ? 'active' : ''}`}
                            onClick={() => { setActiveCategory(category); setActiveIndex(null); }}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="faq-container">
                    {filteredFAQs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className="faq-question">
                                {faq.question}
                                <ChevronDown className="faq-icon" />
                            </div>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
