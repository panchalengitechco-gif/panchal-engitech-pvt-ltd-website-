import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, HardHat, Hammer, Palette, LayoutGrid, Camera } from 'lucide-react';
import '../styles/variables.css';

// Asset Imports
// All image imports are removed as per instruction to use public asset paths directly.

const ProjectWall = () => {
    const [projects, setProjects] = useState([]);
    const [activeSector, setActiveSector] = useState('Random');
    const [selectedProject, setSelectedProject] = useState(null);
    const [loading, setLoading] = useState(true);

    React.useEffect(() => {
        fetch('/data/projects.json')
            .then(res => res.json())
            .then(data => {
                setProjects(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to load projects:", err);
                setLoading(false);
            });
    }, []);

    const sectors = [
        { name: 'Random', icon: <Camera size={18} /> },
        { name: 'Civil Construction', icon: <HardHat size={18} /> },
        { name: 'Fabrication Projects', icon: <Hammer size={18} /> },
        { name: 'Interior Contracting', icon: <Palette size={18} /> }
    ];

    const filteredProjects = activeSector === 'Random'
        ? [...projects].sort(() => Math.random() - 0.5) // Randomize if "Random"
        : projects.filter(p => p.sector === activeSector);

    return (
        <div className="page-wrapper" style={{
            backgroundColor: '#f2f2f2',
            minHeight: '100vh',
            backgroundImage: 'radial-gradient(circle, #e6e6e6 1px, transparent 1px)',
            backgroundSize: '30px 30px'
        }}>
            {/* Header */}
            <div className="page-header" style={{
                backgroundColor: 'var(--color-navy-900)',
                color: 'white',
                padding: '200px 0 80px', // Increased top padding for better distance
                textAlign: 'center',
                clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)'
            }}>
                <div className="container">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{
                            display: 'block',
                            color: 'var(--color-gold-primary)',
                            fontWeight: '700', // Made a bit bolder too
                            letterSpacing: '3px',
                            textTransform: 'uppercase',
                            fontSize: '1.2rem'
                        }}
                    >
                        Panchal Engitech Showcase
                    </motion.span>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        style={{ width: '120px', height: '4px', backgroundColor: 'var(--color-gold-primary)', margin: '15px auto' }}
                    />
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        style={{ fontSize: '4.5rem', margin: '5px 0 0', fontFamily: "'Outfit', sans-serif", fontWeight: '800', letterSpacing: '-2px' }}
                    >
                        Project Gallery
                    </motion.h1>
                </div>
            </div>

            {/* Navigation (Shifting Pill Toggle) */}
            <div className="container" style={{ position: 'relative', marginTop: '-35px', zIndex: 10, textAlign: 'center' }}>
                <div style={{
                    display: 'inline-flex',
                    backgroundColor: 'white',
                    padding: '8px',
                    borderRadius: '60px',
                    boxShadow: '0 15px 35px rgba(0,0,0,0.1), 0 5px 15px rgba(0,0,0,0.05)',
                    gap: '5px'
                }}>
                    {sectors.map((s) => (
                        <button
                            key={s.name}
                            onClick={() => setActiveSector(s.name)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                padding: '14px 28px',
                                backgroundColor: activeSector === s.name ? 'var(--color-navy-900)' : 'transparent',
                                color: activeSector === s.name ? 'white' : 'var(--color-navy-700)',
                                border: 'none',
                                borderRadius: '50px',
                                fontWeight: '700',
                                cursor: 'pointer',
                                transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
                                textTransform: 'uppercase',
                                fontSize: '0.8rem',
                                letterSpacing: '1px',
                                fontFamily: 'var(--font-heading)'
                            }}
                        >
                            <span style={{ opacity: activeSector === s.name ? 1 : 0.6 }}>{s.icon}</span>
                            {s.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Project Wall */}
            <div className="section-padding" style={{ paddingTop: '80px', paddingBottom: '120px' }}>
                <div className="container">
                    <motion.div
                        layout
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '40px',
                            perspective: '1000px'
                        }}
                    >
                        <AnimatePresence mode='popLayout'>
                            {filteredProjects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                        rotate: project.rotation
                                    }}
                                    exit={{ opacity: 0, scale: 0.5, rotate: 0 }}
                                    whileHover={{
                                        scale: 1.05,
                                        rotate: 0,
                                        zIndex: 50,
                                        transition: { duration: 0.3 }
                                    }}
                                    onClick={() => setSelectedProject(project)}
                                    style={{
                                        backgroundColor: activeSector === 'Random' ? 'transparent' : 'white',
                                        padding: activeSector === 'Random' ? '0' : '15px 15px 35px',
                                        boxShadow: activeSector === 'Random' ? '0 15px 45px rgba(0,0,0,0.15)' : '0 10px 40px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.06)',
                                        cursor: 'pointer',
                                        border: activeSector === 'Random' ? 'none' : '1px solid rgba(0,0,0,0.05)',
                                        width: project.size === 'landscape' ? '450px' : (project.size === 'portrait' ? '320px' : '380px'),
                                        height: 'auto',
                                        position: 'relative',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        overflow: 'hidden',
                                        borderRadius: activeSector === 'Random' ? '4px' : '0'
                                    }}
                                >
                                    {/* Image and Tag Container */}
                                    <div style={{
                                        width: '100%',
                                        aspectRatio: project.size === 'landscape' ? '4/3' : (project.size === 'portrait' ? '3/4' : '1/1'),
                                        overflow: 'hidden',
                                        position: 'relative',
                                        border: activeSector === 'Random' ? 'none' : '1px solid #eee'
                                    }}>
                                        <img
                                            src={project.img}
                                            alt={project.title}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                        {/* Pill Tag (Top Right) - Only show if NOT Random section */}
                                        {activeSector !== 'Random' && (
                                            <div style={{
                                                position: 'absolute',
                                                top: '15px',
                                                right: '15px',
                                                backgroundColor: '#020c1b',
                                                color: '#d4af37', // var(--color-gold-primary)
                                                padding: '8px 20px',
                                                fontSize: '0.75rem',
                                                fontWeight: '800',
                                                textTransform: 'uppercase',
                                                letterSpacing: '1.2px',
                                                borderRadius: '50px',
                                                boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                                            }}>
                                                {project.sector}
                                            </div>
                                        )}
                                    </div>

                                    {/* Text Content (Below Image) - Only show if NOT Random section */}
                                    {activeSector !== 'Random' && (
                                        <div style={{
                                            padding: '30px 10px 0',
                                            textAlign: 'center'
                                        }}>
                                            <h3 style={{
                                                margin: '0 0 12px',
                                                fontSize: '1.8rem',
                                                color: '#020c1b',
                                                fontFamily: "'Outfit', sans-serif",
                                                fontWeight: '800',
                                                letterSpacing: '-0.5px'
                                            }}>
                                                {project.title}
                                            </h3>
                                            <div style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: '12px',
                                                color: '#6c757d',
                                                fontSize: '1.1rem',
                                                fontWeight: '500'
                                            }}>
                                                <span style={{ color: 'var(--color-gold-primary)', fontWeight: '800' }}>—</span>
                                                <span>{project.location}</span>
                                                <span style={{ color: 'var(--color-gold-primary)', fontWeight: '800' }}>—</span>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>

            {/* Modal Lightbox */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(2, 12, 27, 0.95)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            zIndex: 2000,
                            padding: '40px'
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                backgroundColor: 'white',
                                maxWidth: '1100px',
                                width: '100%',
                                display: 'grid',
                                gridTemplateColumns: 'minmax(400px, 1.5fr) 1fr',
                                borderRadius: '4px',
                                overflow: 'hidden',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                            }}
                        >
                            <div style={{ height: '600px', backgroundColor: '#000' }}>
                                <img
                                    src={selectedProject.img}
                                    alt={selectedProject.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                />
                            </div>
                            <div style={{ padding: '50px', position: 'relative', display: 'flex', flexDirection: 'column' }}>
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    style={{
                                        position: 'absolute',
                                        top: '20px',
                                        right: '20px',
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        color: '#666'
                                    }}
                                >
                                    <X size={32} />
                                </button>

                                <div style={{
                                    backgroundColor: 'var(--color-navy-900)',
                                    color: 'white',
                                    padding: '5px 15px',
                                    fontSize: '0.75rem',
                                    fontWeight: '700',
                                    display: 'inline-block',
                                    marginBottom: '20px',
                                    alignSelf: 'flex-start',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}>
                                    {selectedProject.sector}
                                </div>

                                <h2 style={{ fontSize: '2.5rem', marginBottom: '10px', color: 'var(--color-navy-900)', fontFamily: "'Outfit', sans-serif" }}>
                                    {selectedProject.title}
                                </h2>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-gold-dark)', marginBottom: '30px', fontWeight: '600' }}>
                                    <MapPin size={18} /> {selectedProject.location}
                                </div>

                                <p style={{ color: '#555', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '40px' }}>
                                    {selectedProject.description}
                                </p>

                                <div style={{ marginTop: 'auto', borderTop: '1px solid #eee', paddingTop: '30px' }}>
                                    <h4 style={{ margin: '0 0 10px', textTransform: 'uppercase', fontSize: '0.8rem', color: '#999', letterSpacing: '1px' }}>Service Categories</h4>
                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        <span style={{ padding: '5px 12px', border: '1px solid var(--color-gold-primary)', color: 'var(--color-gold-dark)', fontSize: '0.8rem', fontWeight: '600' }}>{selectedProject.category}</span>
                                        <span style={{ padding: '5px 12px', border: '1px solid #ddd', color: '#666', fontSize: '0.8rem' }}>Professional Installation</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Responsive Adjustments */}
            <style>{`
                @media (max-width: 992px) {
                    .page-header h1 { fontSize: 2.5rem !important; }
                    .gallery-item { width: 100% !important; height: auto !important; aspect-ratio: 4/3 !important; rotate: 0deg !important; }
                }
                @media (max-width: 768px) {
                    .modal-content { grid-template-columns: 1fr !important; }
                    .modal-image { height: 300px !important; }
                    .modal-details { padding: 30px !important; }
                }
            `}</style>
        </div>
    );
};

export default ProjectWall;
