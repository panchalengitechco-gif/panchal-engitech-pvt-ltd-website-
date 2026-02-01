import React from 'react';
import { Factory, Warehouse, Building2, Landmark, Settings, Truck } from 'lucide-react';
import './Industries.css';

const industries = [
    { name: 'Manufacturing Machines', icon: <Factory size={32} /> },
    { name: 'Industrial Sheds', icon: <Warehouse size={32} /> },
    { name: 'Commercial Buildings', icon: <Building2 size={32} /> },
    { name: 'Government Projects', icon: <Landmark size={32} /> }
];

const Industries = () => {
    return (
        <section className="section-padding bg-navy">
            <div className="container">
                <div className="section-header text-center">
                    <span className="section-subtitle text-gold">INDUSTRIES WE SERVE</span>
                    <h2 className="section-title text-white">Sectors of Expertise</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="industries-grid">
                    {industries.map((item, index) => (
                        <div key={index} className="industry-card">
                            <div className="industry-icon">{item.icon}</div>
                            <h3>{item.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Industries;
