import React, { useState } from 'react'

const airbnb = () => {
    const [activeTab, setActiveTab] = useState("HTML");
    const tabs = [
        {
            label: "HTML",
            content: "HTML is the standard markup language for creating Web pages. HTML describes the structure of a Web page. HTML consists of a series of elements. HTML elements tell the browser how to display the content."
        },
        {
            label: "CSS",
            content: "Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media."
        },
        {
            label: "Javascript",
            content: "JavaScript(JS) is a lightweight, interpreted, or just-in -time compiled programming language with first - class functions.While it is most well - known as the scripting language for Web pages, many non - browser environments also use it, such as Node.js, Apache CouchDB and Adobe "
        },
    ]
    return (
        <div className='w-[100vw] h-[100vh] flex flex-col justify-start bg-black text-blue-300 font-bold text-2xl'>
            <p className='text-center p-10'>Airbnb Interview Question</p>
            <div className='flex w-[100vw] justify-evenly'>
                {tabs.map((tab) => {
                    return (
                        <button className={`${activeTab === tab.label ? "text-white border-blue-300 bg-black" : "bg-white border-b-slate-200 text-black"} px-10 rounded-lg py-4 border-2  hover:bg-black hover:text-white hover:border-blue-300 `} onClick={() => setActiveTab(tab.label)}>{tab.label}</button>
                    );
                })}
            </div>
            <div className='p-10'>
                {
                    tabs.map((tab) => {
                        if (tab.label === activeTab) {
                            return (
                                <p>{tab.content}</p>
                            );
                        }
                    })
                }
            </div>
        </div>
    )
}

export default airbnb
