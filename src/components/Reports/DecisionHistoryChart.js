import arts from '../../img/arts.png';
import beach from '../../img/beach.png';
import data from '../../img/data.png';
import downtown from '../../img/downtown.png';
import froyo from '../../img/froyo.png';
import icecream from '../../img/icecream.png';
import market from '../../img/market.png';
import pushcart from '../../img/pushcart.png';
import smoothie from '../../img/smoothie.png';
import trainstation from '../../img/trainstation.png';
import truck from '../../img/truck.png';
import university from '../../img/university.png';
import { useTranslation } from "react-i18next";

const DecisionHistoryChart = (props) =>{
  const { t } = useTranslation();
    return (
        <div className="" data-reactid=".0.3.2.0.2.0.2.0.1.1">
  <div data-reactid=".0.3.2.0.2.0.2.0.1.1.0">
    <table
      className="decision-history col-md-12"
      aria-hidden="true"
      data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0"
    >
      <thead data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.0">
        <tr data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.0.0">
          <th className="heading" data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.0.0.$0">
            {t('reports.day')}
          </th>
          <th
            className="alt-cell"
            scope="col"
            aria-label="Day 1"
            data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.0.0.$1"
          >
            <span data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.0.0.$1.0">1</span>
          </th>
          <th
            className=""
            scope="col"
            aria-label="Day 2"
            data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.0.0.$2"
          >
            <span data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.0.0.$2.0"></span>
          </th>
          <th
            className="alt-cell"
            scope="col"
            aria-label="Day 3"
            data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.0.0.$3"
          >
            <span data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.0.0.$3.0">3</span>
          </th>
          <th
            className=""
            scope="col"
            aria-label="Day 4"
            data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.0.0.$4"
          >
            <span data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.0.0.$4.0"></span>
          </th>
          <th
            className="alt-cell"
            scope="col"
            aria-label="Day 5"
            data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.0.0.$5"
          >
            <span data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.0.0.$5.0">5</span>
          </th>
          <th
            className=""
            scope="col"
            aria-label="Day 6"
            data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.0.0.$6"
          >
            <span data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.0.0.$6.0"></span>
          </th>
          <th
            className="alt-cell"
            scope="col"
            aria-label="Day 7"
            data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.0.0.$7"
          >
            <span data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.0.0.$7.0">7</span>
          </th>
          <th
            className=""
            scope="col"
            aria-label="Day 8"
            data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.0.0.$8"
          >
            <span data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.0.0.$8.0"></span>
          </th>
          <th
            className="alt-cell"
            scope="col"
            aria-label="Day 9"
            data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.0.0.$9"
          >
            <span data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.0.0.$9.0">9</span>
          </th>
          <th
            className=""
            scope="col"
            aria-label="Day 10"
            data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.0.0.$10"
          >
            <span data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.0.0.$10.0"></span>
          </th>
          <th
            className="alt-cell"
            scope="col"
            aria-label="Day 11"
            data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.0.0.$11"
          >
            <span data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.0.0.$11.0">11</span>
          </th>
          <th
            className=""
            scope="col"
            aria-label="Day 12"
            data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.0.0.$12"
          >
            <span data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.0.0.$12.0"></span>
          </th>
          <th
            className="alt-cell"
            scope="col"
            aria-label="Day 13"
            data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.0.0.$13"
          >
            <span data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.0.0.$13.0">13</span>
          </th>
          <th
            className=""
            scope="col"
            aria-label="Day 14"
            data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.0.0.$14"
          >
            <span data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.0.0.$14.0"></span>
          </th>
          <th
            className="alt-cell"
            scope="col"
            aria-label="Day 15"
            data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.0.0.$15"
          >
            <span data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.0.0.$15.0">15</span>
          </th>
          <th
            className=""
            scope="col"
            aria-label="Day 16"
            data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.0.0.$16"
          >
            <span data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.0.0.$16.0"></span>
          </th>
          <th
            className="alt-cell"
            scope="col"
            aria-label="Day 17"
            data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.0.0.$17"
          >
            <span data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.0.0.$17.0">17</span>
          </th>
          <th
            className=""
            scope="col"
            aria-label="Day 18"
            data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.0.0.$18"
          >
            <span data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.0.0.$18.0"></span>
          </th>
          <th
            className="alt-cell"
            scope="col"
            aria-label="Day 19"
            data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.0.0.$19"
          >
            <span data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.0.0.$19.0">19</span>
          </th>
          <th
            className=""
            scope="col"
            aria-label="Day 20"
            data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.0.0.$20"
          >
            <span data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.0.0.$20.0"></span>
          </th>
          <th
            className="alt-cell"
            scope="col"
            aria-label="Day 21"
            data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.0.0.$21"
          >
            <span data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.0.0.$21.0">21</span>
          </th>
          <th
            className=""
            scope="col"
            aria-label="Day 22"
            data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.0.0.$22"
          >
            <span data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.0.0.$22.0"></span>
          </th>
          <th
            className="alt-cell"
            scope="col"
            aria-label="Day 23"
            data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.0.0.$23"
          >
            <span data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.0.0.$23.0">23</span>
          </th>
          <th
            className=""
            scope="col"
            aria-label="Day 24"
            data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.0.0.$24"
          >
            <span data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.0.0.$24.0"></span>
          </th>
          <th
            className="alt-cell"
            scope="col"
            aria-label="Day 25"
            data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.0.0.$25"
          >
            <span data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.0.0.$25.0">25</span>
          </th>
        </tr>
      </thead>
      <tbody data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1">  
        <tr data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.0:$0">
          <td
            className="first-row row-label"
            aria-label="Research"
            scope="row"
            data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.0:$0.$0"
          >
            <img
              src={data}
              title="Research"
              alt="Research"
              data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.0:$0.$0.0"
            />
          </td>
          {props.dailyValues.map((d, index)=>{
            if(d.method === 'research'){
             return <td
            className="research first-row"
            data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.0:$0.$0=15"
          >
            <span
              className="accessibility-text"
              data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.0:$0.$0=15.0"
              >{t('reports.research')}</span>
          </td>
            }else {
              return <td className={d.id%2 === 1 ? "alt-cell first-row" : "first-row"}>
                <span
                  className="accessibility-text"
                  data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.0:$0.$0=10.0"
                ></span>
              </td>
            }})}
        </tr>
        <tr data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.0:$0">
          <td
            className="first-row row-label"
            aria-label="Downtown"
            scope="row"
            data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.0:$0.$0"
          >
            <img
              src={downtown}
              title="Downtown"
              alt="Downtown"
              data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.0:$0.$0.0"
            />
          </td>
          {props.dailyValues.map((d, index)=>{
            if(d.method !== 'research' && d.location === 'downtown'){
              if(d.menu === 'iceCream')
             {return  <td
            className="ice cream separator first-row"
            data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.1:$0.$0=119"
          >
            <span
              className="accessibility-text"
              data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.1:$0.$0=119.0"
              >{t('reports.iceCream')}</span>
          </td>
             }
            else if(d.menu === 'frozenYogurt')
              {return       <td
            className="frozen yogurt separator first-row"
            data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.1:$0.$0=118"
          >
            <span
              className="accessibility-text"
              data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.1:$0.$0=118.0"
              >{t('reports.frozenYogurt')}</span>
          </td>}
            else if(d.menu === 'smoothies')
             { return  <td
            className="smoothies separator first-row"
            data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.1:$0.$0=115"
          >
            <span
              className="accessibility-text"
              data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.1:$0.$0=115.0"
              >{t('reports.smoothies')}</span>
          </td>}
            }else {
              return <td className={d.id%2 === 1 ? "alt-cell first-row" : "first-row"}>
                <span
                  className="accessibility-text"
                  data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.0:$0.$0=10.0"
                ></span>
              </td>
            }})}
        </tr>
        <tr data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.1:$1">
          <td
            className="row-label"
            aria-label="unselected"
            scope="row"
            data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.1:$1.$1"
          >
            <img
              src={arts}
              title="Arts District"
              alt="Arts District"
              data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.1:$1.$1.0"
            />
          </td>
          {props.dailyValues.map((d, index)=>{
            if(d.location === 'artsDistrict'){
              if(d.menu === 'iceCream')
             {return  <td
            className="ice cream separator first-row"
            data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.1:$0.$0=119"
          >
            <span
              className="accessibility-text"
              data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.1:$0.$0=119.0"
              >{t('reports.iceCream')}</span>
          </td>
             }
            else if(d.menu === 'frozenYogurt')
              {return       <td
            className="frozen yogurt separator first-row"
            data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.1:$0.$0=118"
          >
            <span
              className="accessibility-text"
              data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.1:$0.$0=118.0"
              >{t('reports.frozenYogurt')}</span>
          </td>}
            else if(d.menu === 'smoothies')
             { return  <td
            className="smoothies separator first-row"
            data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.1:$0.$0=115"
          >
            <span
              className="accessibility-text"
              data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.1:$0.$0=115.0"
              >{t('reports.smoothies')}</span>
          </td>}
            }else {
              return <td className={d.id%2 === 1 ? "alt-cell first-row" : "first-row"}>
                <span
                  className="accessibility-text"
                  data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.0:$0.$0=10.0"
                ></span>
              </td>
            }
        })}
        </tr>
        <tr data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.1:$2">
          <td
            className="row-label"
            aria-label="unselected"
            scope="row"
            data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.1:$2.$2"
          >
            <img
              src={trainstation}
              title="Train Station"
              alt="Train Station"
              data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.1:$2.$2.0"
            />
          </td>
          {props.dailyValues.map((d, index)=>{
            if(d.location === 'trainStation'){
              if(d.menu === 'iceCream')
             {return  <td
            className="ice cream separator first-row"
            data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.1:$0.$0=119"
          >
            <span
              className="accessibility-text"
              data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.1:$0.$0=119.0"
              >{t('reports.iceCream')}</span>
          </td>
             }
            else if(d.menu === 'frozenYogurt')
              {return       <td
            className="frozen yogurt separator first-row"
            data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.1:$0.$0=118"
          >
            <span
              className="accessibility-text"
              data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.1:$0.$0=118.0"
              >{t('reports.frozenYogurt')}</span>
          </td>}
            else if(d.menu === 'smoothies')
             { return  <td
            className="smoothies separator first-row"
            data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.1:$0.$0=115"
          >
            <span
              className="accessibility-text"
              data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.1:$0.$0=115.0"
              >{t('reports.smoothies')}</span>
          </td>}
            }else {
              return <td className={d.id%2 === 1 ? "alt-cell first-row" : "first-row"}>
                <span
                  className="accessibility-text"
                  data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.0:$0.$0=10.0"
                ></span>
              </td>
            }
})}
        </tr>
        <tr data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.1:$3">
          <td
            className="row-label"
            aria-label="University"
            scope="row"
            data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.1:$3.$3"
          >
            <img
              src={university}
              title="University"
              alt="University"
              data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.1:$3.$3.0"
            />
          </td>
          {props.dailyValues.map((d, index)=>{
            if(d.location === 'university'){
              if(d.menu === 'iceCream')
             {return  <td
            className="ice cream separator first-row"
            data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.1:$0.$0=119"
          >
            <span
              className="accessibility-text"
              data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.1:$0.$0=119.0"
              >{t('reports.iceCream')}</span>
          </td>
             }
            else if(d.menu === 'frozenYogurt')
              {return       <td
            className="frozen yogurt separator first-row"
            data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.1:$0.$0=118"
          >
            <span
              className="accessibility-text"
              data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.1:$0.$0=118.0"
              >{t('reports.frozenYogurt')}</span>
          </td>}
            else if(d.menu === 'smoothies')
             { return  <td
            className="smoothies separator first-row"
            data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.1:$0.$0=115"
          >
            <span
              className="accessibility-text"
              data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.1:$0.$0=115.0"
              >{t('reports.Smoothies')}</span>
          </td>}
            }else {
              return <td className={d.id%2 === 1 ? "alt-cell first-row" : "first-row"}>
                <span
                  className="accessibility-text"
                  data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.0:$0.$0=10.0"
                ></span>
              </td>
            }
        })}
        </tr>
        <tr data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.1:$4">
          <td
            className="row-label"
            aria-label="unselected"
            scope="row"
            data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.1:$4.$4"
          >
            <img
              src={market}
              title="City Market"
              alt="City Market"
              data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.1:$4.$4.0"
            />
          </td>
          {props.dailyValues.map((d, index)=>{
            if(d.location === 'cityMarket'){
              if(d.menu === 'iceCream')
             {return  <td
            className="ice cream separator first-row"
            data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.1:$0.$0=119"
          >
            <span
              className="accessibility-text"
              data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.1:$0.$0=119.0"
              > {t('reports.frozenYogurt')}</span>
          </td>
             }
            else if(d.menu === 'frozenYogurt')
              {return       <td
            className="frozen yogurt separator first-row"
            data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.1:$0.$0=118"
          >
            <span
              className="accessibility-text"
              data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.1:$0.$0=118.0"
              > {t('reports.frozenYogurt')}</span>
          </td>}
            else if(d.menu === 'smoothies')
             { return  <td
            className="smoothies separator first-row"
            data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.1:$0.$0=115"
          >
            <span
              className="accessibility-text"
              data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.1:$0.$0=115.0"
              > {t('reports.smoothies')}</span>
          </td>}
            }else {
              return <td className={d.id%2 === 1 ? "alt-cell first-row" : "first-row"}>
                <span
                  className="accessibility-text"
                  data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.0:$0.$0=10.0"
                ></span>
              </td>
            }})}
        </tr>
        <tr data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.1:$5">
          <td
            className="row-label"
            aria-label="Beach"
            scope="row"
            data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.1:$5.$5"
          >
            <img
              src={beach}
              title="Beach"
              alt="Beach"
              data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.1:$5.$5.0"
            />
          </td>
          {props.dailyValues.map((d, index)=>{
            if(d.location === 'beach'){
              if(d.menu === 'iceCream')
             {return  <td
            className="ice cream separator first-row"
            data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.1:$0.$0=119"
          >
            <span
              className="accessibility-text"
              data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.1:$0.$0=119.0"
              >{t('reports.iceCream')}</span>
          </td>
             }
            else if(d.menu === 'frozenYogurt')
              {return       <td
            className="frozen yogurt separator first-row"
            data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.1:$0.$0=118"
          >
            <span
              className="accessibility-text"
              data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.1:$0.$0=118.0"
              > {t('reports.frozenYogurt')}</span>
          </td>}
            else if(d.menu === 'smoothies')
             { return  <td
            className="smoothies separator first-row"
            data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.1:$0.$0=115"
          >
            <span
              className="accessibility-text"
              data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.1:$0.$0=115.0"
              >{t('reports.smoothies')}</span>
          </td>}
            }else {
              return <td className={d.id%2 === 1 ? "alt-cell first-row" : "first-row"}>
                <span
                  className="accessibility-text"
                  data-reactid=".0.3.2.0.2.0.2.0.1.1.0.0.1.0:$0.$0=10.0"
                ></span>
              </td>
            }})}
        </tr>
      </tbody>
    </table>
    <div
      className="row decisions-legend"
      aria-hidden="true"
      data-reactid=".0.3.2.0.2.0.2.0.1.1.0.1"
    >
      <ul className="row" data-reactid=".0.3.2.0.2.0.2.0.1.1.0.1.0">
        <li className="cream" data-reactid=".0.3.2.0.2.0.2.0.1.1.0.1.0.0">
          {t('reports.iceCream')}
        </li>
        <li className="smoothies" data-reactid=".0.3.2.0.2.0.2.0.1.1.0.1.0.1">
          {t('reports.smoothies')}
        </li>
        <li className="yogurt" data-reactid=".0.3.2.0.2.0.2.0.1.1.0.1.0.2">
          {t('reports.frozenYogurt')}
        </li>
      </ul>
    </div>
  </div>
</div>

    )
}
export default DecisionHistoryChart;