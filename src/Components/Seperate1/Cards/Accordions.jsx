import React from "react";

const Accordions = () => {
  return (
    <div class="accordion" id="accordionExample">
      <div class="card" style={{ borderRadius: "1em" }}>
        <div class="card-header" id="headingOne">
          <h2 class="mb-0">
            <button
              class="btn"
              type="button"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne">
              Collapsible Group Item #1
            </button>
          </h2>
        </div>
        <div
          id="collapseOne"
          class="collapse show"
          aria-labelledby="headingOne"
          data-parent="#accordionExample">
          <div class="card-body">content</div>
        </div>
      </div>
    </div>
  );
};

export default Accordions;
