import React from 'react';
import githubImg from '../assets/images/github_1051326.png';
import linkedinImg from '../assets/images/linkedin_2584663.png';

export const GithubIcon = ({ size = 24, className = '', ...props }) => (
    <img 
        src={githubImg} 
        width={size} 
        height={size} 
        alt="Github" 
        className={`object-contain ${className}`}
        {...props} 
    />
);

export const LinkedinIcon = ({ size = 24, className = '', ...props }) => (
    <img 
        src={linkedinImg} 
        width={size} 
        height={size} 
        alt="Linkedin" 
        className={`object-contain ${className}`}
        {...props} 
    />
);
