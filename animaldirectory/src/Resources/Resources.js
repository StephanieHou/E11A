import React from "react";
import axios from "axios";
import { Route, Link, Switch } from 'react-router-dom';
import Section from "./Section";
import './Resources.css';
import logo from "../animal_images/logo.png";

class Resources extends React.Component {
    state = { input: "" };

    render() {
        const { input } = this.state;
        return (
            <div>
                <div id="topbar">
                    <img id="logo" src={logo} />
                    <div>
                        <a id="service" href="https://www.aspca.org/nyc" title="Services">
                            <p>Services</p>
                        </a>
                        <div id="hometop">
                            <Link to={`/`}><p> Home</p></Link>
                        </div>
                    </div>
                </div>
                <img src="https://blog.humanesociety.org/wp-content/uploads/2017/10/CAT-DOG-ISTOCK-528565850_364465-1-1220x814.jpg" id="Resimg" />
                <div id="buttonbar">
                    <a class="resbuttons"  href="https://www.aspca.org/" title="ASPCA">
                        <p>ASPCA</p>
                    </a>
                    <a class="resbuttons" href="https://www.peta.org/" title="PETA">
                        <p>PETA</p>
                    </a>
                    <a class="resbuttons" href="http://www.humanesociety.org/issues/abuse_neglect/?credit=web_id85538991" title="Humane">
                        <p>Humane Society</p>
                    </a>
                    <a class="resbuttons" href="https://www.paws.org/" title="PAWS">
                        <p>PAWS</p>
                    </a>
                    <a class="resbuttons" href="https://bestfriends.org/" title="Best Friends">
                        <p>Best Friends</p>
                    </a>
                    <a class="resbuttons" href="http://aldf.org/" title="ALDF">
                        <p>ALDF</p>
                    </a>
                    <a class="resbuttons" href="http://www1.nyc.gov/nyc-resources/service/1057/animal-abuse" title="NYC1">
                        <p>NYC1</p>
                    </a>
                </div>
                <h1 id="header"> Looking to help? </h1>
                <h3 id="subhead">You can find resources below to become more informed and report animal cruelty</h3>
                <h3>Spacees</h3>
                <center><h3 id="news"> Recent News </h3></center>
                <div id="content">
                    <Section
                        image="https://thenypost.files.wordpress.com/2018/02/gettyimages-482890606.jpg?quality=90&strip=all&w=618&h=410&crop=1"
                        header="Rent the Runway implements no-fur policy: PETA"
                        description="The fur is flying out the door at Rent the Runway."
                        bigdiv="bigdiv"
                        worddiv="bigword"
                        alink="https://nypost.com/2018/02/28/rent-the-runway-implements-no-fur-policy-peta/"
                    />
                    <Section
                        image="https://thenypost.files.wordpress.com/2018/02/dogs-escape-china-adopted.jpg?quality=90&strip=all&w=618&h=410&crop=1"
                        header="Dogs that escaped Chinese meat market need good homes"
                        description="A pack of five German shepherd dogs who escaped “barbaric” conditions in the Asian meat trade are now destined for New York "
                        bigdiv="smalldiv"
                        worddiv="smallword"
                        alink="https://nypost.com/2018/02/20/dogs-that-escaped-chinese-meat-market-need-good-homes/"
                    />
                    <Section
                        image="https://thenypost.files.wordpress.com/2018/02/man-caught-beating-dog-on-camera.jpg?quality=90&strip=all&w=618&h=410&crop=1"
                        header="Man reportedly caught on camera abusing his adopted puppy"
                        description="A man has been arrested after he was caught on camera dragging, choking and beating a puppy in southern Mississippi."
                        bigdiv="smalldiv"
                        worddiv="smallword"
                        alink="https://nypost.com/2018/02/15/man-reportedly-caught-on-camera-abusing-his-adopted-puppy/"
                    />
                    <Section
                        image="https://thenypost.files.wordpress.com/2018/02/180210-reynaldo-bonilla.jpg?quality=90&strip=all&w=480&h=320&crop=1"
                        header="Cockfighting ringleader busted with 60 roosters"
                        description="Cops executing a drug-search warrant at a Long Island home found 60 cockfighting roosters and a malnourished pit bull in the squalid backyard, authorities said."
                        bigdiv="smalldiv"
                        worddiv="smallword"
                        alink="https://nypost.com/2018/02/10/cockfighting-ringleader-busted-with-60-roosters-drugs-cops/"
                    />
                    <Section
                        image="https://thenypost.files.wordpress.com/2018/02/shutterstock_364214531.jpg?quality=90&strip=all&w=618&h=410&crop=1"
                        header="No-kill shelter has to remind volunteers not to wear fur, Canada Goose items"
                        description="The no-kill animal shelter Bideawee needed to remind its animal rights volunteers not to wear fur and Canada Goose items to events "
                        bigdiv="smalldiv"
                        worddiv="smallword"
                        alink="https://nypost.com/2018/02/09/no-kill-shelter-has-to-remind-volunteers-not-to-wear-fur-canada-goose-items/"
                    />
                </div>
            </div>
        );
    }
}

export default Resources;