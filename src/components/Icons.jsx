import React from 'react';
import githubImg from '../assets/images/github_1051326.png';
import linkedinImg from '../assets/images/linkedin_2584663.png';
import reactImg from '../assets/images/react.png';
import tailwindImg from '../assets/images/Tailwind CSS.png';
import typescriptImg from '../assets/images/typescript.png';
import pythonImg from '../assets/images/Python.png';
import phpImg from '../assets/images/php.png';
import laravelImg from '../assets/images/Laravel.png';
import supabaseImg from '../assets/images/Supabase.png';
import nextImg from '../assets/images/Next.js.png';

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

export const ReactIcon = ({ size = 24, className = '', ...props }) => (
    <img src={reactImg} width={size} height={size} alt="React" className={`object-contain ${className}`} {...props} />
);

export const TailwindIcon = ({ size = 24, className = '', ...props }) => (
    <img src={tailwindImg} width={size} height={size} alt="Tailwind CSS" className={`object-contain ${className}`} {...props} />
);

export const TypescriptIcon = ({ size = 24, className = '', ...props }) => (
    <img src={typescriptImg} width={size} height={size} alt="TypeScript" className={`object-contain ${className}`} {...props} />
);

export const PythonIcon = ({ size = 24, className = '', ...props }) => (
    <img src={pythonImg} width={size} height={size} alt="Python" className={`object-contain ${className}`} {...props} />
);

export const PhpIcon = ({ size = 24, className = '', ...props }) => (
    <img src={phpImg} width={size} height={size} alt="PHP" className={`object-contain ${className}`} {...props} />
);

export const LaravelIcon = ({ size = 24, className = '', ...props }) => (
    <img src={laravelImg} width={size} height={size} alt="Laravel" className={`object-contain ${className}`} {...props} />
);

export const SupabaseIcon = ({ size = 24, className = '', ...props }) => (
    <img src={supabaseImg} width={size} height={size} alt="Supabase" className={`object-contain ${className}`} {...props} />
);

export const NextIcon = ({ size = 24, className = '', ...props }) => (
    <img src={nextImg} width={size} height={size} alt="Next.js" className={`object-contain ${className}`} {...props} />
);
