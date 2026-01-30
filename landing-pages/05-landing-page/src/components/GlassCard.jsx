import React from 'react';
import './GlassCard.css';

/**
 * GlassCard Component
 * Reusable glassmorphism card wrapper
 * 
 * Props:
 * - children: Content to display inside the card
 * - className: Additional CSS classes
 * - hover: Enable hover effect (default: true)
 * - strong: Use stronger glass effect (default: false)
 */
const GlassCard = ({ children, className = '', hover = true, strong = false }) => {
    const cardClass = `glass-card ${strong ? 'glass-card--strong' : ''} ${hover ? 'glass-card--hover' : ''} ${className}`;

    return (
        <div className={cardClass}>
            {children}
        </div>
    );
};

export default GlassCard;
