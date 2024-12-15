import React, { useState, useEffect } from 'react';
import imgBlack from './medBlack.png'; 
import imgWhite from './medWhite.png';  
import { Link } from 'react-router-dom';
const Medium = () => {

  return (
    <div>
      {/* Section 1: Medium Introduction with AOS */}
      <section className="py-6 bg-black dark:bg-pink-800 dark:text-gray-50 text-gray-50">
        <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
          <h1 
            className="text-5xl font-bold leading-none text-center"
            data-aos="fade-up"  // Fade in on scroll
          >
            Check out my Medium too!
          </h1>
          <p 
            className="pt-2 pb-8 text-xl font-medium text-center"
            data-aos="fade-in"  // Fade in text
            data-aos-delay="200" // Delay to stagger animations
          >
            Read my articles, stay updated with my latest posts and insights.
          </p>
          <Link to="https://medium.com/@abdou16moustakim" target="_blank" rel="noopener noreferrer">
          <img 
            src={imgWhite}
            alt="Visit my Medium" 
            className="w-48 h-auto md:w-64 lg:w-80 xl:w-96 rounded-lg cursor-pointer transform transition-all hover:scale-125 hover:opacity-90 hover:shadow-lg"
            data-aos="zoom-in"  // Zoom in on scroll
            data-aos-delay="200" // Delay the image animation
          />
          </Link>
          
          {/* Extended description with AOS animations */}
          <p 
            className="pt-8 text-xl font-medium text-center"
            data-aos="fade-up"
            data-aos-delay="300"  // Delayed text animations
          >
            In the near future, one of my biggest ambitions is to create a comprehensive educational brand focused on Computer Science. I envision a platform where people can learn about various core areas such as programming, web development, software engineering, and cybersecurity.
            <br />
            <br />
            My goal is to empower individuals by providing accessible, high-quality resources for mastering the essential skills needed to succeed in the tech industry. Whether you're just starting your coding journey, looking to transition into tech, or aiming to deepen your knowledge in specialized fields like cybersecurity or full-stack web development, I want to offer content that meets you where you are in your learning process.
            <br /><br />
            This educational brand will feature tutorials, real-world projects, career advice, and cutting-edge trends in technology. I hope to build a thriving community of learners who not only gain technical expertise but also develop the problem-solving mindset and creativity needed to innovate and succeed in this ever-evolving industry.
            <br /><br />
            By creating content that's easy to follow, engaging, and up-to-date, I hope to make learning Computer Science enjoyable, impactful, and accessible to anyone with a passion for tech, regardless of their background. Stay tuned as I bring this vision to life and share my journey with you all!
          </p>
        </div>
      </section>

      {/* Section 2: Quote with AOS */}
      <section className="py-4 dark:bg-black dark:text-gray-50">
        <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-4 md:p-8 md:px-24 xl:px-48">
          <p 
            className="italic text-2xl text-gray-700 mb-2 dark:text-yellow-50"
            data-aos="fade-up"  // Fade in on scroll
            data-aos-delay="100"
          >
            "I am confident that I can make a difference in the field, and I'm dedicated to empowering others to succeed in the world of technology."
          </p>
          <p 
            className="text-gray-600 text-lg dark:text-yellow-50"
            data-aos="fade-up"  // Fade in on scroll with delay
            data-aos-delay="100"
          >
            - Abdelaziz Moustakim
          </p>
        </div>
      </section>
    </div>
  );
};

export default Medium;
