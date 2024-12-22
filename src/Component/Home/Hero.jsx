import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaEnvelope, FaInstagram, FaTwitter, FaMediumM } from 'react-icons/fa'; 
import { SiBuymeacoffee, SiSkillshare, SiFiverr, SiFreelancer } from 'react-icons/si';
import { TbBrandUpwork } from 'react-icons/tb';
import ReactTypingEffect from 'react-typing-effect';
import { ReactTyped } from 'react-typed';
import image from './image1.jpg';
import { Button } from '@mui/material';
import Quotes from './quotes';


const Hero = () => {
  return (
    <div className='dark:bg-gray-900 dark:text-white'>
      <div className="min-h-screen flex flex-col items-center bg-gray-50 dark:bg-gray-900 dark:text-white duration-200">
        {/* First Section: Full-Width with Transparent Background */}
        <div className="w-full bg-primary bg-opacity-20 p-10 border-b-[0.5px] border-gray-200 dark:border-black shadow-lg rounded-xl">
          {/* Circular Photo */}
          <div className="flex flex-col items-center space-y-5">
            <div className="w-40 h-40 mb-4 relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-300 opacity-70 blur-lg" />
              <img
                src={image}
                alt="Profile"
                className="rounded-full w-full h-full object-cover border-4 border-white dark:border-gray-700 shadow-2xl relative z-10 transition-transform transform hover:scale-105"
              />
            </div>

            {/* Name and Description */}
            <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-gray-800 dark:text-gray-100 mb-10">
                <span className="block sm:inline mr-4">Abdelaziz</span>
                <span className="block sm:inline">Moustakim</span>
              </h1>
              <div className="text-lg text-gray-600 dark:text-gray-200 max-w-xl mx-auto">
                <p className="pt-2 pb-8 text-xl font-semibold italic text-center"> 
                  I’m a 20-year-old aspiring <Link className="text-primary text-xl font-bold hover:underline" to="/Projects">software engineer</Link> with a strong interest in <Link className="text-primary text-xl font-bold hover:underline" to="/Projects">cybersecurity</Link>. 
                  As a newcomer to writing in <Link className="text-primary text-xl font-bold hover:underline" to="/Writing">computer science</Link> and <Link className="text-primary text-xl font-bold hover:underline" to="/Writing">software development</Link>, I aim to share my journey while creating secure and innovative solutions. 
                  I’m also passionate about teaching as an <Link className="text-primary text-xl font-bold hover:underline" to="/Teachings">instructor</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row max-w-4xl mx-auto space-y-10 md:space-y-0">
          {/* More About Me Section */}
          <div className="md:flex-2 md:flex md:flex-col md:text-left">
            <h2 className="text-2xl font-bold mb-4 ml-3 text-gray-700 dark:text-gray-400">More About Me</h2>
            <p className="text-gray-600 pt-2 pb-8 text-xl font-medium text-left ml-3 dark:text-gray-100">
              My journey in <span className="text-third font-bold">technology</span> started at <span className="text-third font-bold">17</span>, and I’ve been captivated by coding ever since. Currently, I am pursuing a <span className="text-third font-bold">Bachelor of Computer Science (BCS)</span> where I dive deeper into <span className="text-third font-bold">computer science</span> and explore how technology can solve real-world challenges.
            </p>
            <p className="text-gray-600 pt-2 pb-8 text-xl font-medium text-left ml-3 dark:text-gray-100">
              My passion for software motivates me to create innovative solutions that help people and contribute positively to the tech community. As a <a className="text-third font-bold">lifelong learner</a>, and <a className="text-third font-bold">content creator</a> in the tech space, I love <a className="text-third font-bold">teaching others</a> what I have learned over the years and encouraging other people to be collaborative as well. 
            </p>
            <p className="text-gray-600 text-1xl pb-8 text-xl font-medium ml-3 dark:text-gray-100">
              The tech world can be so competitive; however, I think many people, including myself, want to see it become more cooperative and collaborative. We have the ability to fix problems everyone has, and we should all understand what a great responsibility that is.
            </p>
          </div>

          {/* Vertical Line for larger screens */}
          <div className="hidden md:block w-px bg-gray-300 mx-4"></div>

          {/* Contact Me Section for larger screens */}
          <div className="hidden md:flex flex flex-col items-start">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-700 dark:text-gray-400">Contact</h2>
            <div className="flex flex-col items-start space-y-4">
              {[ 
                { href: "https://github.com/abdelazizmoustakim", label: "GitHub", icon: <FaGithub /> },
                { href: "mailto:abdelaziz@azizmoustakim.com", label: "Email", icon: <FaEnvelope /> },
                { href: "https://twitter.com/code_withabdo", label: "X (Twitter)", icon: <FaTwitter /> },
                { href: "https://www.instagram.com/code_withabdo/", label: "Instagram", icon: <FaInstagram /> },
                { href: "https://medium.com/@abdou16moustakim", label: "Medium", icon: <FaMediumM /> },
                { href: "", label: "Skillshare", icon: <SiSkillshare /> },
                { href: "https://www.upwork.com/freelancers/~01c0ce3652498ab140", label: "Upwork", icon: <TbBrandUpwork /> },
                { href: "", label: "Freelancer", icon: <SiFreelancer /> },
                { href: "https://buymeacoffee.com/code_withabdo", label: "Buy Me a Coffee", icon: <SiBuymeacoffee /> }
              ].map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-gray-900 hover:text-primary transition duration-200 space-x-2 w-full justify-start dark:text-primary dark:hover:text-gray-100"
                >
                  <span className="text-3xl dark:text-primary dark:hover:text-gray-100">{icon}</span>
                  <span className="text-lg">{label}</span>
                </a>
              ))}
            </div>
          </div>
          {/* Contact Me Section for smaller screens */}
          <div className='md:hidden flex flex-col items-center space-y-6'>
            <h2 className='text-2xl font-bold mb-4 text-gray-700 dark:text-gray-400'>My Links</h2>
            <div className="grid grid-cols-2 gap-6 w-full px-6">
              {[
                { href: "https://github.com/abdelazizmoustakim", label: "GitHub", icon: <FaGithub /> },
                { href: "https://www.skillshare.com/en/user/azizmoustakim", label: "Skillshare", icon: <SiSkillshare /> },
                { href: "https://www.upwork.com/freelancers/~01c0ce3652498ab140", label: "Upwork", icon: <TbBrandUpwork /> },
                { href: "https://medium.com/@abdou16moustakim", label: "Medium", icon: <FaMediumM /> }
              ].map(({ href, label, icon }) => (
                <a 
                  key={label}
                  href={href}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center space-x-2 text-gray-900 hover:text-primary transition duration-200 dark:text-primary dark:hover:text-gray-100 rounded-lg p-4 bg-gray-100 dark:bg-gray-800 shadow-md hover:shadow-xl"
                >
                  <span className="text-3xl">{icon}</span>
                  <span className="text-sm">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <Quotes />
      </div>
    </div>
  );
};
export default Hero;