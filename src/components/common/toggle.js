import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { toggle } from '../../actions/toggle';
import i18next from 'i18next';

class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            unfold: true
        }
    }

    componentDidMount() {
        // fixes an issue with contour drawing the graph on an invisible element, causing its width
        //  to be the default (400) rather than sized correctly
        if (this.handleResize && !this.state.unfold) {
            const e = ReactDOM.findDOMNode(this);
            this.handleResize(e.children[0].clientWidth);
        }
    }

    getToggleClass() {
        return this.state.unfold ? 'toggler active' : 'toggler';
    }

    getRootClass() {
        let className = 'toggle';
        className += this.props.isTutorial ? ' chart' : '';
        // className += this.props.newHighlight ? ' new-highlight' : '';
        // className += this.props.highlight ? ' highlight-element' : '';
        // className += ` ${i18next.language}`;
        return className;
    }

    getContentClass() {
        return this.state.unfold ? '' : 'hidden';
    }

    getHeading() {
        return this.props.heading;
    }

    getHeaders(data) {
        // default headers are the first row of keys
        if (data[0].labels) {
            return data[0].labels;
        } else {
            return [];
        }
    }

    getSections(data) {
        const sections = [];
        data.forEach((section, idx) => {
            let ps = [];
            if (section.hasOwnProperty('header')) {
                ps.push(<h5 key={'h' + idx}>{section.header}</h5>);
            }
            section.texts.forEach((text, j) => {
                const splits = text.split(':');
                if (splits.length > 1 && splits[1].length > 0) {
                    ps.push(
                        <p key={j}>
                            <span className="text-label">{splits[0]}: </span>
                            {splits[1]}
                        </p>
                    );
                } else {
                    ps.push(<p key={j}>{text}</p>);
                }
            });
            sections.push(
                <div key={idx}>
                    {ps}
                </div>);
        });
        return sections;
    }

    toggleHandler() {
        console.log('toggle');
        const currentState = this.state.unfold;
        this.setState({
            unfold: !currentState
        })
    }

    createTable(data, formatter, tableClass) {
        let classes = {};
        let tRows = [];
        let tHeaders = [];
        let headerData = this.getHeaders(data);

        data.forEach((row, i) => {
            let counter = 0;
            let tCells = [];
            if (Array.isArray(row.rowInformation)) {
                const rowInfo = row.rowInformation;
                for (let i = 0; i < rowInfo.length; i++) {
                    let className;
                    let text = rowInfo[i];
                    text = (formatter && (!isNaN(parseFloat(text)))) ? formatter(text) : text;

                    if (!classes.hasOwnProperty(i)) {
                        // if the data is a number, set the class to num-data
                        className = +text === text ? 'num-data' : '';
                        classes[i] = className;
                        if (!headerData[i]) {
                            tHeaders.push(<td></td>);
                        }
                        tHeaders.push(<th key={counter} className={className} scope="col">{headerData[i]}</th>);
                    } else {
                        className = classes[i];
                    }
                    if (counter === 0) {
                        tCells.push(<th key={counter} className={className} scope="row">{text}</th>);
                    } else {
                        tCells.push(<td key={counter} className={className}>{text}</td>);
                    }

                    counter++;
                }
            }
            tRows.push(<tr key={i}>{tCells}</tr>);
        });

        return (
            <table className={`${i18next.language} ${tableClass || ''}`}>
                <thead>
                    <tr>{tHeaders}</tr>
                </thead>
                <tbody>{tRows}</tbody>
            </table>
        );
    }

    render() {
        function getImage() {
            return this.props.purchasedReport ? (<img className="logo" src="img/data.png" aria-hidden="true" alt="" />) : undefined;
        }
        let subheading = this.props.subheading ? (<span className="toggle-sub-header"> {this.props.subheading}</span>) : undefined;
        return (
            <div className={this.getRootClass()}>
                <div className="toggle-container" onClick={(e) => {
                            e.stopPropagation();
                            this.toggleHandler();
                        }}>
                    <h2 className="toggle-header">
                        {this.props.isTutorial && <img className="logo" src={this.props.logo} aria-hidden="true" alt="" ></img>}
                        {getImage.bind(this)()}
                        <span>{this.getHeading()}</span>
                    </h2>
                    <button
                        className={this.getToggleClass()}
                        onClick={(e) => {
                            e.stopPropagation();
                            this.toggleHandler();
                        }}
                        aria-label={`${this.getHeading()}: ${this.state.unfold ? 'Show' : 'Hide'} Content`}
                        role="switch"
                        aria-checked={this.state.unfold}
                    ></button>
                </div>
                <div className={this.state.unfold ? '' : 'hidden'}>   
                      {this.props.children}
                </div>
            </div>
        );
    }
}

export default Toggle;
