import React from "react";
import "./line.css";

const Line = props => {
  return (
    <ul class="list-progress">
      <li>
        <p class="animated fadeIn">Wealth Management</p>
        <div
          class="progress-bar-js progress-bar-horizontal progress-bar-red-orange-1 progress-bar--animated"
          data-value="70"
          data-stroke="4"
          data-easing="linear"
          data-counter="true"
          data-duration="1000"
          data-trail="100"
        >
          <svg
            viewBox="0 0 100 1"
            preserveAspectRatio="none meet"
            height="4"
            style="display: block; width: 100%;"
          >
            <path
              d="M 0,0.5 L 100,0.5"
              stroke-width="22"
              fill-opacity="0"
              class="progress-bar__trail"
            ></path>
            <path
              d="M 0,0.5 L 100,0.5"
              stroke-width="1"
              fill-opacity="0"
              style="stroke-dasharray: 100, 100; stroke-dashoffset: 30;"
              class="progress-bar__stroke"
            ></path>
          </svg>
          <div class="progress-bar__body" style="width: 70%;">
            70
          </div>
        </div>
      </li>
      <li>
        <p class="animated fadeIn">Business Owners</p>
        <div
          class="progress-bar-js progress-bar-horizontal progress-bar-red-orange-1 progress-bar--animated"
          data-value="50"
          data-stroke="4"
          data-easing="linear"
          data-counter="true"
          data-duration="1000"
          data-trail="100"
        >
          <svg
            viewBox="0 0 100 1"
            preserveAspectRatio="none meet"
            height="4"
            style="display: block; width: 100%;"
          >
            <path
              d="M 0,0.5 L 100,0.5"
              stroke-width="22"
              fill-opacity="0"
              class="progress-bar__trail"
            ></path>
            <path
              d="M 0,0.5 L 100,0.5"
              stroke-width="1"
              fill-opacity="0"
              style="stroke-dasharray: 100, 100; stroke-dashoffset: 50;"
              class="progress-bar__stroke"
            ></path>
          </svg>
          <div class="progress-bar__body" style="width: 50%;">
            50
          </div>
        </div>
      </li>
      <li>
        <p class="animated fadeIn">Insurance &amp; Annuities</p>
        <div
          class="progress-bar-js progress-bar-horizontal progress-bar-red-orange-1 progress-bar--animated"
          data-value="87"
          data-stroke="4"
          data-easing="linear"
          data-counter="true"
          data-duration="1000"
          data-trail="100"
        >
          <svg
            viewBox="0 0 100 1"
            preserveAspectRatio="none meet"
            height="4"
            style="display: block; width: 100%;"
          >
            <path
              d="M 0,0.5 L 100,0.5"
              stroke-width="22"
              fill-opacity="0"
              class="progress-bar__trail"
            ></path>
            <path
              d="M 0,0.5 L 100,0.5"
              stroke-width="1"
              fill-opacity="0"
              style="stroke-dasharray: 100, 100; stroke-dashoffset: 13;"
              class="progress-bar__stroke"
            ></path>
          </svg>
          <div class="progress-bar__body" style="width: 87%;">
            87
          </div>
        </div>
      </li>
      <li>
        <p class="animated fadeIn">Cash &amp; Credit</p>
        <div
          class="progress-bar-js progress-bar-horizontal progress-bar-red-orange-1 progress-bar--animated"
          data-value="95"
          data-stroke="4"
          data-easing="linear"
          data-counter="true"
          data-duration="1000"
          data-trail="100"
        >
          <svg
            viewBox="0 0 100 1"
            preserveAspectRatio="none meet"
            height="4"
            style="display: block; width: 100%;"
          >
            <path
              d="M 0,0.5 L 100,0.5"
              stroke-width="22"
              fill-opacity="0"
              class="progress-bar__trail"
            ></path>
            <path
              d="M 0,0.5 L 100,0.5"
              stroke-width="1"
              fill-opacity="0"
              style="stroke-dasharray: 100, 100; stroke-dashoffset: 5;"
              class="progress-bar__stroke"
            ></path>
          </svg>
          <div class="progress-bar__body" style="width: 95%;">
            95
          </div>
        </div>
      </li>
    </ul>
  );
};

export default Line;
