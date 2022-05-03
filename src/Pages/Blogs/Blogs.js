import React from 'react';

const Blogs = () => {
    return (

        <div>
            <h2 className='text-center text-4xl mt-4 font-bold'><span className='text-rose-800'>MY</span><span className='text-black'> BLOGS</span></h2>

            <div className='container border-4 border-rose-200 border-x-rose-600 '>
                <div className='container mt-10 mb-8 border-4 border-rose-200 border-y-rose-600 '>
                    <h2 className='text-rose-800 font-bold'>Difference between JavaScript and node.js?</h2>
                    <p className='text-rose-500'>Javascript is a high-level programming language.  It can be said that Javascript is the updated version of the ECMA script.  It is mostly known as JS. It is basically used on the client-side and it is used in frontend development.JS allows to add HTML tags, whereas, Nodejs does not have capability to add HTML tags. Nodejs allows Javascript code to run outside the browser. Nodejs is written in C, C++ and Javascript. It allows the javascript to be run on the server-side. It is mostly used on the server-side and is used in server-side development.</p>
                    <h2 className='text-rose-800 font-bold'>When should you use node.js and when should you use mongodb?</h2>
                    <p className='text-rose-500'>MongoDB and NodeJS are two different technologies. MonogDB is a database system which gives you a chance to proficiently store documents in a database and to execute actions like data updates, or to search documents by some conditions’ If your application needs the ability to insistently store data in a way that you can proficiently query or update it later, then you  can use a form of database like MongoDB. NodeJS's concern is to especially execute your application. Any project needs a programming environment and a runtime collection that offers you basic programming tools/maintenance and can accumulate and/or interpret your code. Nodejs is such as tool for the Javascript programming language.</p>
                    <h2 className='text-rose-800 font-bold'>Differences between SQL and NOSQL databases?</h2>
                    <p className='text-rose-500'>There are a lot of databases used today in the industry. Some are SQL databases, some are NoSQL databases. SQL databases display data in table forms so it is known as table-based database. SQL databases have fixed or static schema. Whereas, NoSQL databases display data as collection of key-value pair, documents, graph databases or wide-column stores. NoSQL databases also have dynamic schema.</p>
                </div>
            </div>
        </div>


    );
};

export default Blogs;