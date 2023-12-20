import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";
import Link from "next/link";
import { useContext } from "react";
import { AlexioContext } from "../Context";
import siteMetadata from "../utils/siteMetaData";
import ServicesContainer from "./ServicesContainer";

const Services = () => {
  const features = [
    {
      id: 1,
      text: "Static Websites",
      description:
        "For lightning-fast performance and simplicity, we excel in crafting static websites that deliver content with speed and efficiency.",
    },
    {
      id: 2,
      text: "Dynamic Websites",
      description:
        "Harness the power of real-time updates and interactive user interfaces. Our dynamic web development services using React and Next.js ensure seamless functionality and engaging user experiences.",
    },
    
  ];

  const { changeNav } = useContext(AlexioContext);

  return (
    <ServicesContainer
      extraClass="service-section !m-0 !gap-0 resume-section"
      name="resume"
      title="Our Services"
      subTitle="History"
      leftImage="static/img/title-2.jpg"
      leftImageTitle="services"
    >
      <div className="row text-white dark:text-dark m-0 gap-0">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <p>
            Welcome to Canals Consulting, where expertise meets innovation! Our array of services is meticulously crafted to elevate your business operations and empower you with the tools you need for success. Explore the diverse range of services we offer:
            </p>

            <div className="flex sm:flex-row flex-col w-full sm:gap-6 gap-0">
              <Accordion
                type="single"
                collapsible
                className="text-sm sm:w-1/2 w-full h-fit"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-sm px-5 text-left hover:no-underline p-3 outline-none">
                  Financial Modeling
                  </AccordionTrigger>
                  <AccordionContent className="text-white/40 dark:text-dark/80">
                  Unlock the full potential of your financial data with our comprehensive financial modeling services. From forecasting to scenario analysis, we transform numbers into valuable insights to drive strategic decision-making.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-sm px-5 hover:no-underline p-3 outline-none">
                  Business Planning
                  </AccordionTrigger>
                  <AccordionContent className="text-white/40 dark:text-dark/80">
                  Chart the course for your business's success with our tailored business planning services. We help you develop robust strategies, set achievable goals, and create a roadmap for sustainable growth.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-sm px-5 hover:no-underline p-3 outline-none">
                  Excel, Macros, VBA
                  </AccordionTrigger>
                  <AccordionContent className="text-white/50 dark:text-dark/80">
                  Master the power of Microsoft Excel with our Excel, Macros, and VBA services. Streamline your workflows, automate repetitive tasks, and enhance your spreadsheet capabilities to boost efficiency.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-sm px-5 hover:no-underline p-3 outline-none">
                  Google Sheets Customization
                  </AccordionTrigger>

                  <AccordionContent className="text-white/50 dark:text-dark/80">
                  Optimize collaboration and data management with our Google Sheets customization services. Tailored solutions to meet your specific needs, ensuring seamless integration with your business processes.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-sm px-5 hover:no-underline p-3 outline-none">
                  Financial Statement Analysis
                  </AccordionTrigger>
                  <AccordionContent className="text-white/50 dark:text-dark/80">
                  Gain deeper insights into your financial performance through our financial statement analysis services. Uncover trends, identify opportunities, and make informed decisions based on a thorough examination of your financial data.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-sm px-5 hover:no-underline p-3 outline-none">
                  Excel Database Cleaning
                  </AccordionTrigger>
                  <AccordionContent className="text-white/50 dark:text-dark/80">
                  Maintain data integrity and accuracy with our Excel database cleaning services. We employ advanced techniques to cleanse and organize your data, ensuring reliability and consistency.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-sm px-5 hover:no-underline p-3 outline-none">
                  QuickBooks, Xero, Wave Bookkeeping
                  </AccordionTrigger>
                  <AccordionContent className="text-white/50 dark:text-dark/80">
                  Simplify your financial record-keeping with our expertise in QuickBooks, Xero, and Wave bookkeeping services. Stay compliant, reduce errors, and have confidence in the accuracy of your financial records.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                  <AccordionTrigger className="text-sm px-5 hover:no-underline p-3 outline-none">
                  Data Entry
                  </AccordionTrigger>
                  <AccordionContent className="text-white/50 dark:text-dark/80">
                  Efficient and accurate data entry is the backbone of any successful business. Let our skilled professionals handle the data entry tasks, allowing you to focus on what you do best.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-9">
                  <AccordionTrigger className="text-sm px-5 hover:no-underline p-3 outline-none">
                  Virtual Assistant
                  </AccordionTrigger>
                  <AccordionContent className="text-white/50 dark:text-dark/80">
                  Simplify your financial record-keeping with our expertise in QuickBooks, Xero, and Wave bookkeeping services. Stay compliant, reduce errors, and have confidence in the accuracy of your financial records.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div>
            <h3 className="text-2xl text-boo-700">Let's Build Something Extraordinary</h3>
            <p className="text-white/50 dark:text-dark/80">
              No matter the scope or complexity of your project, our React and
              Next.js experts are ready to take on the challenge. Collaborate
              with us to transform your vision into a stunning, functional, and
              future-proof web solution.
            </p>
            <p>
              Ready to get started?{" "}
              <span>
                <p className=" text-blue-800 hover:text-blue-700 underline inline-block cursor-pointer" onClick={() => changeNav("contact", false)}>
                  Contact
                </p>
              </span>{" "}
              Us and let's embark on this exciting journey together!
            </p>
            <p className="text-white/50">
              Feel free to customize the content based on your specific
              offerings and brand voice.
            </p>
          </div>
        </div>
      </div>
    </ServicesContainer>
  );
};
export default Services;
