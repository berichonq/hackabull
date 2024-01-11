import { QA } from "./QA";

export function FAQ() {  
  return (
    <div id="faq" className="section container montserrat relative">
      <h1  className="mb-4 antique-tuscan about-us-font-color text-9xl text-left m-4	pb-3">FAQ</h1>
      <br/>
      <div className="absolute pink_shadow"></div>
      <div className="flex-col faq-flex justify-items-center">
        <div className="flex-none mb-3">
          <QA question={"Where is it?"} answer={"HackJam will take place at the Engineering II building on October 22 this year."} />
        </div>
        <div className="flex-none mb-3">
          <QA question={"How can I register for HackJam?"} answer={"To register for HackJam, please click on the 'Register Now' button at the top of the page and fill out the form."}/>
        </div>
        <div className="flex-none mb-3">
          <QA question={"Who can participate in HackJam?"} answer={"HackJam is open to participants of all skill levels and backgrounds, including students, professionals, and enthusiasts. We welcome anyone with a passion for technology and innovation!"}/>
        </div>

        <div className="flex-none mb-3">
          <QA question={"How many people on a team?"} answer={"You can make up to 4 people on one team. If you don't have a team yet, don't worry, we will have a team building area for people to get together."}/>
        </div>

        <div className="flex-none mb-3">
          <QA question={"What should I bring to HackJam?"} answer={"It's recommended to bring your own laptop and any other necessary equipment for your project."}/>
        </div>
        <div className="flex-none mb-3">
          <QA question={"What are the judging criteria for projects?"} answer={"The judging criteria typically include factors such as creativity, technial complexity, innovation, and presentation."}/>
        </div>
        <div className="flex-none mb-3">
          <QA question={"Will there be prizes for the winning teams or individuals?"} answer={"Yes, there will be prizes awarded to the top-performing teams or individuals!"}/>
        </div>
        <div className="flex-none mb-3">
          <QA question={"Will there be free food?"} answer={"Yes, there will be free lunch and dinner served to participants, along with drinks and snacks throughout the event!"}/>
        </div>
      </div>
    </div>
  );
}
