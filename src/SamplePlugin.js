import React from "react"
import { FlexPlugin } from "@twilio/flex-plugin"

import CustomTaskList from "./components/CustomTaskList/CustomTaskList"

const PLUGIN_NAME = "SamplePlugin"

export default class SamplePlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME)
  }

  

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   */
  async init(flex, manager) {

    
// Component that shows the external SVG as an <img>
const CustomLogo = () => (
  <img
    src="https://www.reshot.com/preview-assets/icons/QM984GWUFB/computer-binary-code-QM984GWUFB.svg"
    alt="Company Logo"
    style={{ width: 150, height: 32 }}
  />
);

  // Change the browser tab title
  document.title = "Kratin LLC";

  // Change the favicon
  const link = document.querySelector("link[rel~='icon']");
  if (link) {
    link.href = "https://yourdomain.com/path-to-icon.png";
  } else {
    const newLink = document.createElement("link");
    newLink.rel = "icon";
    newLink.href = "https://yourdomain.com/path-to-icon.png";
    document.head.appendChild(newLink);
  }
   
    flex.CRMContainer.defaultProps.uriCallback = (task) => {
      // return task
      //   ? `https://www.bing.com/search?q=${task.attributes.name}`
      //   : "https://www.google.com"
      return "https://en.wikipedia.org/wiki/Main_Page"
    }
  }
}