import React from 'react';
import '../css/Blog.css';

function Blog() {
  return (
    <div className="blog-container">
      <h1>About PasswordManager</h1>
      <p>
        PasswordManager is a secure and user-friendly application designed to help you manage your passwords efficiently. 
        With PasswordManager, you can store all your passwords in one place, ensuring they are safe and easily accessible whenever you need them.
      </p>
      <h2>Features</h2>
      <ul>
        <li>storage for all your passwords</li>
        <li>Easy access to your passwords with a user-friendly interface</li>
       
      
        <li>Backup and restore your password data</li>
      </ul>
      <h2>Why Choose PasswordManager?</h2>
      <p>
        In today's digital age, managing multiple passwords can be challenging. PasswordManager simplifies this task by providing a secure and convenient solution. 
        With our app, you can ensure that your passwords are always protected and easily accessible, giving you peace of mind.
      </p>
    </div>
  );
}

export default Blog;