import React from 'react'
import ChatBot from 'react-simple-chatbot'
function App() {
  const steps =[
    {
      id : "0",
      message : "Hello Welcome to Our Digital Website",
      trigger : "1",
    },
    {
      id : "1",
      options : [
        {value :"What services do you offer?",label : "What services do you offer?", trigger:"2"},
      ]
    },
    {
      id : "2",
      message : "We offer a full range of digital marketing services, including SEO, content marketing, PPC advertising, social media management, and more. Our goal is to help businesses grow their online presence and achieve their marketing objectives.",
      trigger : "3"
    },
    {
      id : "3",
      options : [
        {value :"Can you tell me more about your digital marketing services?",label : "Can you tell me more about your digital marketing services?", trigger:"4"},
      ]
    },
    {
      id : "4",
      message : "Our digital marketing services are designed to enhance your online visibility, drive traffic, and convert leads into customers. We specialize in SEO, PPC, social media management, content marketing, and analytics, providing customized strategies to meet your unique business needs.",
      trigger : "5"
    },
    {
      id : "5",
      options : [
        {value :"How do I get started with your services?",label : "How do I get started with your services?", trigger:"6"},
      ]
    },
    {
      id : "6",
      message : "Our digital marketing services are designed to enhance your online visibility, drive traffic, and convert leads into customers. We specialize in SEO, PPC, social media management, content marketing, and analytics, providing customized strategies to meet your unique business needs.",
      trigger : "7"
    },
    {
      id : "7",
      options : [
        {value :"What sets your company apart from other digital marketing agencies?",label : "What sets your company apart from other digital marketing agencies?", trigger:"8"},
      ]
    },
    {
      id : "8",
      message : "We pride ourselves on delivering personalized service, data-driven strategies, and measurable results. Our team consists of experienced professionals who are passionate about helping your business grow through innovative marketing solutions.",
      trigger : "9"
    },
    {
      id : "9",
      options : [
        {value :"What is SEO, and why is it important?",label : "What is SEO, and why is it important?", trigger:"10"},
      ]
    },
    {
      id : "10",
      message : "SEO, or Search Engine Optimization, is the process of optimizing your website to rank higher on search engines like Google. It's important because higher rankings lead to increased visibility, more traffic, and ultimately more customers.",
      trigger : "11"
    },
    {
      id : "11",
      options : [
        {value :"How long does it take to see results from SEO?",label : "How long does it take to see results from SEO?", trigger:"12"},
      ]
    },
    {
      id : "12",
      message : "   SEO is a long-term strategy, and it typically takes 3 to 6 months to start seeing significant results. However, this can vary depending on your industry, competition, and the current state of your website.",
      end : true,
    }

  ]
  return (
    <>
      <ChatBot steps={steps}/>
    </>
  );
}

export default App;
