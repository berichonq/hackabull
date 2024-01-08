import React from "react";
import "./AboutUs.css";

export function AboutUs() {
  return (
    <div className="container about-us py-20">
      <h1 className="mb-4 antique-tuscan text-8xl text-left m-3	pb-3">ABOUT US</h1>
      <div className="col">
        <div className="col-md-8 m-3">
          <p
            className="century-ps about-us-font-color text-left"
            style={{ columnCount: 2, overflow: "hidden" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            corporis tempore ipsum voluptatum possimus consectetur excepturi
            accusantium exercitationem, assumenda quod et optio eaque
            reprehenderit rerum delectus aspernatur voluptates consequuntur!
            Expedita. Architecto corrupti eos veritatis repellat delectus iusto
            vitae aspernatur suscipit error libero harum eaque dolorem
            reprehenderit quae iure distinctio nulla obcaecati atque, neque,
            commodi laboriosam perspiciatis! Eius debitis repudiandae enim?
            Voluptatibus exercitationem necessitatibus, neque fuga quibusdam
            fugiat rem excepturi mollitia? Optio consequuntur quam saepe enim
            aperiam assumenda unde deleniti alias illum eaque, accusamus
            accusantium tempore inventore commodi necessitatibus! Assumenda,
            accusantium.{" "}
          </p>
        </div>
        <div className="col-md-8 m-3">
          <p className="century-ps about-us-font-color text-left">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
            distinctio earum beatae quos corrupti dolores, consequatur tempora
            dicta at doloremque. Autem saepe necessitatibus dolorem eaque
            delectus rem ea sit totam.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
