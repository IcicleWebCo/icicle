import React from 'react';
import { scrollToSection } from '../../utils/navigation';

interface InternalLinkProps {
  section: string;
  children: React.ReactNode;
  className?: string;
  trackingLabel?: string;
  onClick?: () => void;
}

const InternalLink: React.FC<InternalLinkProps> = ({
  section,
  children,
  className = '',
  trackingLabel,
  onClick,
}) => {
  const handleClick = () => {
    if (trackingLabel && typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'internal_link_click', {
        event_category: 'Navigation',
        event_label: trackingLabel || `Navigate to ${section}`,
        destination_section: section,
      });
    }

    scrollToSection(section);

    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={className}
      aria-label={`Navigate to ${section} section`}
    >
      {children}
    </button>
  );
};

export default InternalLink;
