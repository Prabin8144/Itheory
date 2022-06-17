import React from "react";
import "./slide.css";
const colors = [
  { "img":  "https://assets.interntheory.com/img/testimonial-image/in3.jpg",
  "title":"I was on a look out for an internship to spend my summer productively and I stumbled upon Inter Theory.  ",
  "name":"Amani Nagda",
  "com":"Intern at Viacom18 ",
},{ "img":  "https://assets.interntheory.com/img/testimonial-image/in4.jpg",
"title":"If you are more than satisfied with a particular product/firm who gives you more than you expect then there’s no need to find a substitute.",
"name":"Harshil Bhadra",
"com":"Intern at Porsche"
},{ "img":    "https://assets.interntheory.com/img/testimonial-image/in1.jpg",

"title":"I created my profile because I had before Intern Theory,.",
"name":"Siddharth Viyyapu",
"com":"Intern at Gooseberry Homes",
},{ "img":   "https://assets.interntheory.com/img/testimonial-image/in2.jpg",
"title":"We have been using InternTheory for over a year now and are very happy with the quality of applications that we receive.",
"name":"Sshikha Bodwaani",
"com":"Sr. Exec. HR at BookMyShow",
}
];
const delay = 3000;
// "#0088FE", "#00C49F", "#FFBB28"
export function Slide() {
  const [index, setIndex] = React.useState(0);

  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundColor, index) => (
          <div className="slide" key={index} style={{ backgroundColor }}>
            <div style={{display:"flex"}}>
              <div>
            <img src={backgroundColor.img} style={{height:"150px",width:"150px"}} alt=""/>
           <h1>{backgroundColor.name}</h1>
           <p style={{color:"blue"}}>{backgroundColor.com}</p>
           </div>
          <div  style={{width:"60%"}}>
          <p  style={{width:"60px"}}>{backgroundColor.title}</p>
          </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}