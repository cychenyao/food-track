import { useState, useEffect } from "react";
import garts from "../../img/icons-grey/g-arts.png";
import gbeach from "../../img/icons-grey/g-beach.png";
import gdata from "../../img/icons-grey/g-data.png";
import gdowntown from "../../img/icons-grey/g-downtown.png";
import gfroyo from "../../img/icons-grey/g-froyo.png";
import gicecream from "../../img/icons-grey/g-icecream.png";
import gmarket from "../../img/icons-grey/g-market.png";
import gpushcart from "../../img/icons-grey/g-pushcart.png";
import gsmoothie from "../../img/icons-grey/g-smoothie.png";
import gtrainstation from "../../img/icons-grey/g-trainstation.png";
import gtruck from "../../img/icons-grey/g-truck.png";
import guniversity from "../../img/icons-grey/g-university.png";

import arts from "../../img/arts.png";
import beach from "../../img/beach.png";
import data from "../../img/data.png";
import downtown from "../../img/downtown.png";
import froyo from "../../img/froyo.png";
import icecream from "../../img/icecream.png";
import market from "../../img/market.png";
import pushcart from "../../img/pushcart.png";
import smoothie from "../../img/smoothie.png";
import trainstation from "../../img/trainstation.png";
import truck from "../../img/truck.png";
import university from "../../img/university.png";
import { useTranslation } from "react-i18next";

const MakeDescisions = (props) => {
  const { t } = useTranslation();
  let isGrey = false;
  const [selectedMethod, setMethod] = useState("");
  const [selectedMenu, setMenu] = useState("");
  const [selectedLocation, setLocation] = useState("");
  //university, City Market, Beach
  const [countTimes, setCountTimes] = useState([[0,0,0],[0,0,0],[0,0,0],0,[0,0,0],0])
  const methods = [
    {
      title:t("methods.foodTruck"),
      id: "truck",
      img: isGrey ? gtruck : truck,
    },
    {
      title:t("methods.pushCart"),
      id: "cart",
      img: isGrey ? gpushcart : pushcart,
    },
    {
      title: t("methods.research"),
      id: "research",
      img: isGrey ? gdata : data,
    },
  ];
  const menus = [
    {
      title: t("menus.iceCream"),
      id: "iceCream",
      img: isGrey ? gicecream : icecream,
    },
    {
      title: t("menus.frozenYogurt"),
      id: "frozenYogurt",
      img: isGrey ? gfroyo : froyo,
    },
    {
      title: t("menus.smoothies"),
      id: "smoothies",
      img: isGrey ? gsmoothie : smoothie,
    },
  ];
  const locations = [
    {
      title: t("locations.downtown"),
      id: "downtown",
      img: isGrey ? gdowntown : downtown,
    },
    {
      title: t("locations.artsDistrict"),
      id: "artsDistrict",
      img: isGrey ? garts : arts,
    },
    {
      title: t("locations.trainStation"),
      id: "trainStation",
      img: isGrey ? gtrainstation : trainstation,
    },
    {
      title: t("locations.university"),
      id: "university",
      img: isGrey ? guniversity : university,
    },
    {
      title: t("locations.cityMarket"),
      id: "cityMarket",
      img: isGrey ? gmarket : market,
    },
    {
      title: t("locations.beach"),
      id: "beach",
      img: isGrey ? gbeach : beach,
    },
  ];
  const clickGo = () => {
    setMenu("");
    setLocation("");
    const copy = [...props.dailyValues];
    const currrentValue = calcuValue();
    let newDay;
    if(selectedMethod==='truck' || selectedMethod==='research'){
        let i = props.currentDay-1;
        for(let x = i; x < i+5; x++){
            copy[x].value=currrentValue;
            copy[x].method=selectedMethod;
            copy[x].menu=selectedMenu;
            copy[x].location=selectedLocation;
            if(x===i)
              copy[x].breaking=calcuBreaking();
        }
        newDay = props.currentDay +  5;
    }else{
        copy[props.currentDay-1].value=currrentValue;
        copy[props.currentDay-1].method=selectedMethod;
        copy[props.currentDay-1].menu=selectedMenu;
        copy[props.currentDay-1].location=selectedLocation;
        copy[props.currentDay-1].breaking=calcuBreaking();
        newDay = props.currentDay +  1;
    }
    if(newDay%5===1)
        setMethod("");
    props.setDailyValue(copy);
    props.submitResult(newDay);
  };

  const calcuValue = () => {
    switch (selectedLocation) {
      //Downtown
      case locations[0].id:
        switch (selectedMenu) {
          //Ice Cream
          case menus[0].id:
            switch (selectedMethod) {
              //Food Truck
              case methods[0].id:
                return 718;
              //Pushcart
              case methods[1].id:
                return 287;
              //Research
              case methods[2].id:
                return 0;
              default:
                return null;
            }
          //Frozen Yogurt
          case menus[1].id:
            switch (selectedMethod) {
              //Food Truck
              case methods[0].id:
                return 1061;
              //Pushcart
              case methods[1].id:
                return 424;
              //Research
              case methods[2].id:
                return 0;
              default:
                return null;
            }
          //Smoothies
          case menus[2].id:
            switch (selectedMethod) {
              //Food Truck
              case methods[0].id:
                return 828;
              //Pushcart
              case methods[1].id:
                return 331;
              //Research
              case methods[2].id:
                return 0;
              default:
                return null;
            }
          default:
            return null;
        }
      //Arts District
      case locations[1].id:
        switch (selectedMenu) {
          //Ice Cream
          case menus[0].id:
            switch (selectedMethod) {
              //Food Truck
              case methods[0].id:
                return 1260;
              //Pushcart
              case methods[1].id:
                return 504;
              //Research
              case methods[2].id:
                return 0;
              default:
                return null;
            }
          //Frozen Yogurt
          case menus[1].id:
            switch (selectedMethod) {
              //Food Truck
              case methods[0].id:
                return 641;
              //Pushcart
              case methods[1].id:
                return 256;
              //Research
              case methods[2].id:
                return 0;
              default:
                return null;
            }
          //Smoothies
          case menus[2].id:
            switch (selectedMethod) {
              //Food Truck
              case methods[0].id:
                return 788;
              //Pushcart
              case methods[1].id:
                return 315;
              //Research
              case methods[2].id:
                return 0;
              default:
                return null;
            }
          default:
            return null;
        }
      //Train Station
      case locations[2].id:
        switch (selectedMenu) {
          //Ice Cream
          case menus[0].id:
            switch (selectedMethod) {
              //Food Truck
              case methods[0].id:
                return 737;
              //Pushcart
              case methods[1].id:
                return 295;
              //Research
              case methods[2].id:
                return 0;
              default:
                return null;
            }
          //Frozen Yogurt
          case menus[1].id:
            switch (selectedMethod) {
              //Food Truck
              case methods[0].id:
                return 828;
              //Pushcart
              case methods[1].id:
                return 331;
              //Research
              case methods[2].id:
                return 0;
              default:
                return null;
            }
          //Smoothies
          case menus[2].id:
            switch (selectedMethod) {
              //Food Truck
              case methods[0].id:
                return 857;
              //Pushcart
              case methods[1].id:
                return 343;
              //Research
              case methods[2].id:
                return 0;
              default:
                return null;
            }
          default:
            return null;
        }
      //University
      case locations[3].id:
        switch (selectedMenu) {
          //Ice Cream
          case menus[0].id:
            switch (selectedMethod) {
              //Food Truck
              case methods[0].id:
                return 720;
              //Pushcart
              case methods[1].id:
                return 288;
              //Research
              case methods[2].id:
                 return 0;
              default:
                return null;
            }
          //Frozen Yogurt
          case menus[1].id:
            switch (selectedMethod) {
              //Food Truck
              case methods[0].id:
                return 789;
              //Pushcart
              case methods[1].id:
                return 316;
              //Research
              case methods[2].id:
                return 0;
              default:
                return null;
            }
          //Smoothies
          case menus[2].id:
            switch (selectedMethod) {
              //Food Truck
              case methods[0].id:
                return 742;
              //Pushcart
              case methods[1].id:
                return 297;
              //Research
              case methods[2].id:
                return 0;
              default:
                return null;
            }
          default:
             return null;
        }
      //City Market
      case locations[4].id:
        switch (selectedMenu) {
          //Ice Cream
          case menus[0].id:
            switch (selectedMethod) {
              //Food Truck
              case methods[0].id:
                return 694;
              //Pushcart
              case methods[1].id:
                return 278;
              //Research
              case methods[2].id:
                return 0;
              default:
                return null;
            }
          //Frozen Yogurt
          case menus[1].id:
            switch (selectedMethod) {
              //Food Truck
              case methods[0].id:
                return 841;
              //Pushcart
              case methods[1].id:
                return 336;
              //Research
              case methods[2].id:
                return 0;
              default:
                return null;
            }
          //Smoothies
          case menus[2].id:
            switch (selectedMethod) {
              //Food Truck
              case methods[0].id:
                return 767;
              //Pushcart
              case methods[1].id:
                return 307;
              //Research
              case methods[2].id:
                return 0;
              default:
                return null;
            }
          default:
            return null;
        }
      //Beach
      case locations[5].id:
        switch (selectedMenu) {
          //Ice Cream
          case menus[0].id:
            switch (selectedMethod) {
              //Food Truck
              case methods[0].id:
                return 784;
              //Pushcart
              case methods[1].id:
                return 314;
              //Research
              case methods[2].id:
                return 0;
              default:
                return null;
            }
          //Frozen Yogurt
          case menus[1].id:
            switch (selectedMethod) {
              //Food Truck
              case methods[0].id:
                return 736;
              //Pushcart
              case methods[1].id:
                return 294;
              //Research
              case methods[2].id:
                return 0;
              default:
                return null;
            }
          //Smoothies
          case menus[2].id:
            switch (selectedMethod) {
              //Food Truck
              case methods[0].id:
                return 686;
              //Pushcart
              case methods[1].id:
                return 274;
              //Research
              case methods[2].id:
                return 0;
              default:
                return null;
            }
          default:
              return null;
        }
      default:
        return null;
    }
  };

  const calcuBreaking = () => {
    let copy = countTimes;
    switch (selectedLocation) {
      //Downtown
      case locations[0].id:
       { 
        switch (selectedMenu) {
          //Ice Cream
          case menus[0].id:
            copy[0][0]++;
            setCountTimes(copy)
            if( copy[0][0] === 1)
              return t("breakings.b1")
            else 
              return null;
          //Frozen Yogurt
          case menus[1].id:
            copy[0][1]++;
            setCountTimes(copy)
            if( copy[0][1] === 1)
            return t("breakings.b2")
            else 
              return null;
          //Smoothies
          case menus[2].id:
            copy[0][2]++;
            setCountTimes(copy)
            if( copy[0][2] === 1)
            return t("breakings.b3")
            else 
              return null;
          default:
            return null;
        }}
      //Arts District
      case locations[1].id:
        {
        switch (selectedMenu) {
          //Ice Cream
          case menus[0].id:
            copy[1][0]++;
            setCountTimes(copy);
            if(copy[1][0]===1)
              return t("breakings.b4")
            else if(copy[1][0]===2 && copy[1][1]<2 && copy[1][2]<2)
              return t("breakings.b5")
            else return null;
          //Frozen Yogurt
          case menus[1].id:
            copy[1][1]++;
            setCountTimes(copy);
            if(copy[1][1]===1)
            return t("breakings.b6")
              else if(copy[1][0]<2 && copy[1][1]===2 && copy[1][2]<2)
              return t("breakings.b7")
            else return null;
          //Smoothies
          case menus[2].id:
            copy[1][2]++;
            setCountTimes(copy);
            if(copy[1][2]===1)
              return t("breakings.b8")
              else if(copy[1][0]<2 && copy[1][1]<2 && copy[1][2]===2)
              return t("breakings.b9")
            else return null;
          default:
            return null;
        }
      }
      //Train Station
      case locations[2].id:
        {
        switch (selectedMenu) {
          //Ice Cream
          case menus[0].id:
            copy[2][0]++;
            setCountTimes(copy)
            if( copy[2][0] === 1)
            return t("breakings.b10")
            else 
              return null;
          //Frozen Yogurt
          case menus[1].id:
            copy[2][1]++;
            setCountTimes(copy)
            if( copy[2][1] === 1)
            return t("breakings.b11")
            else 
              return null;
          //Smoothies
          case menus[2].id:
            copy[2][2]++;
            setCountTimes(copy)
            if( copy[2][2] === 1)
            return t("breakings.b12")
            else 
              return null;
          default:
            return null;
        }}
      //University
      case locations[3].id:
        {
        switch (selectedMenu) {
          //Ice Cream
          case menus[0].id:
            copy[3]++;
            setCountTimes(copy)
            if(copy[3] === 1)
            return t("breakings.b13")
            else return null;
          default:
            return null;
        }
      }
      //City Market
      case locations[4].id:
        switch (selectedMenu) {
          //Ice Cream
          case menus[0].id:
            copy[4][0]++;
            setCountTimes(copy)
            if( copy[4][0] === 1)
            return t("breakings.b14")
            else 
              return null;
          //Frozen Yogurt
          case menus[1].id:
            copy[4][1]++;
            setCountTimes(copy)
            if( copy[4][1] === 1)
              return t("breakings.b15")
            else 
              return null;
          //Smoothies
          case menus[2].id:
            copy[4][2]++;
            setCountTimes(copy)
            if( copy[4][2] === 1)
              return t("breakings.b16")
            else 
              return null;
          default:
            return null;
        }
      //Beach
      case locations[5].id:
        {copy[5]++;
         setCountTimes(copy)
          if(copy[5] ===  1){
            return t("breakings.b17")
          }else return null;
        }
      default:
        return null;
    }
  };

  useEffect(() => {
    console.log("re-render because currentMethod changed:", selectedMethod);
    console.log("re-render because selectedMenu changed:", selectedMenu);
    console.log(
      "re-render because selectedLocation changed:",
      selectedLocation
    );
  }, [selectedMethod, selectedMenu, selectedLocation]);
  return (
    <section className="decision mobile-hidden" data-reactid=".0.3.2.1">
      <div className="row choices" data-reactid=".0.3.2.1.0">
        <div
          className="col-md-12 col-sm-12 col-xs-12 header mobile-hidden"
          data-reactid=".0.3.2.1.0.0"
        >
          <span
            className="ss-icon ss-target"
            aria-hidden="true"
            data-reactid=".0.3.2.1.0.0.0"
          ></span>
          <h3
            className="decisions-header callout"
            data-reactid=".0.3.2.1.0.0.1"
          >
            {t("makeDecisions.makeDecisions")}
          </h3>
        </div>
        <div data-reactid=".0.3.2.1.0.2">
          <h4
            className={
              "col-md-12 choice-type" +
              (selectedMethod !== "" ? " selected" : "")
            }
            data-reactid=".0.3.2.1.0.2.$method"
          >
            {t("makeDecisions.method")}:
          </h4>
          <div className="method-row method" data-reactid=".0.3.2.1.0.2.1">
            {methods.map((item, index) => {
              return (
                <div className="method" id={item.id}>
                  <label
                    htmlFor={item.id}
                    className={selectedMethod === item.id ? "selected" : ""}
                    onClick={() => {
                        if(props.currentDay%5===1)
                            {setMethod(item.id);
                             props.setWholeWeekSelected(item.id==="cart"?false:true);
                            }
                        }}
                  >
                    <input
                      id={item.id}
                      name="method"
                      type="radio"
                      className="choice-wrapper inactive"
                    ></input>
                    <img
                      src={item.img}
                      title={item.id==="truck" || item.id==="research"?"You can change your method when the week is over":"Capacity is limited, but you can change your menu and location daily"}
                      aria-hidden="true"
                      alt="Food Truck"
                    />
                    <span>{item.title}</span>
                    {/* <span className="accessibility-text">
                      You can change your method when the week is over
                    </span> */}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h4
            className={
              "col-md-12 choice-type" + (selectedMenu !== "" ? " selected" : "")
            }
            data-reactid=".0.3.2.1.0.2.$method"
          >
          {t("makeDecisions.menu")}:
          </h4>
          <div className="method-row method" data-reactid=".0.3.2.1.0.2.1">
            {menus.map((item, index) => {
              return (
                <div className="method" id={item.id}>
                  <label
                    htmlFor={item.id}
                    className={selectedMenu === item.id ? "selected" : ""}
                    onClick={() => {
                        setMenu(item.id)
                        }}
                  >
                    <input
                      id={item.id}
                      name="method"
                      type="radio"
                      className="choice-wrapper inactive"
                    ></input>
                    <img
                      src={item.img}
                      aria-hidden="true"
                      alt="Food Truck"
                    />
                    <span>{item.title}</span>
                    <span className="accessibility-text">
                   {t("makeDecisions.remind1")}
                    </span>
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h4
            className={
              "col-md-12 choice-type" +
              (selectedLocation !== "" ? " selected" : "")
            }
            data-reactid=".0.3.2.1.0.2.$method"
          >
            {t("makeDecisions.location")}:
          </h4>
          <div className="method-row method" data-reactid=".0.3.2.1.0.2.1">
            {locations.map((item, index) => {
              return (
                <div className="method" id={item.id}>
                  <label
                    htmlFor={item.id}
                    className={selectedLocation === item.id ? "selected" : ""}
                    onClick={() => setLocation(item.id)}
                  >
                    <input
                      id={item.id}
                      name="method"
                      type="radio"
                      className="choice-wrapper inactive"
                    ></input>
                    <img
                      src={item.img}
                      title="You are not able to sell frozen treats while you conduct research"
                      aria-hidden="true"
                      alt="Food Truck"
                    />
                    <span>{item.title}</span>
                    <span className="accessibility-text">
                    {t("makeDecisions.remind2")}
                    </span>
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        {props.currentDay <= 25 && (
          <span
            className={
              "col-md-12 current-date" +
              (selectedMethod !== "" &&
              selectedMenu !== "" &&
              selectedLocation !== ""
                ? " active"
                : "")
            }
            data-reactid=".0.3.2.1.0.5"
          >
           {t("makeDecisions.strategy")} {Math.ceil(props.currentDay / 5)},  {t("makeDecisions.strategy")}{" "}
            {props.currentDay % 5 !== 0 ? props.currentDay % 5 : 5}
          </span>
        )}
        {props.currentDay > 25 && (
          <span
            className="col-md-12 current-date active"
            data-reactid=".0.3.2.1.0.5"
          >
            {t("map.endOfSimulation")}
          </span>
        )}
        <button
          className={
            "go-btn btn btn-primary col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-8 col-xs-offset-2" +
            (selectedMethod !== "" &&
            selectedMenu !== "" &&
            selectedLocation !== ""
              ? " active"
              : "")
          }
          data-reactid=".0.3.2.1.0.7"
        >
          <span data-reactid=".0.3.2.1.0.7.0" onClick={() => clickGo()}>
            {t("makeDecisions.go")} 
          </span>
          <span
            className="accessibility-text"
            aria-live="polite"
            data-reactid=".0.3.2.1.0.7.1"
            aria-hidden="false"
          >
            {t("makeDecisions.buttonDisabled")}
          </span>
        </button>
      </div>
    </section>
  );
};
export default MakeDescisions;
