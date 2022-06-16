import React, { Component } from 'react';
import i18next from 'i18next';

// An overlay component that shows content and
export class Overlay extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const refs = this.refs;
        setTimeout(function () {
            if (refs.content) {
                refs.content.scrollTo(0, 0);
            }
        });
    }

    getOverlay() {
        return '';
    }

    render() {
        let overlay = this.getOverlay();
        return (
            <section className="overlay active">
                <div className="row">
                    <div
                        className={`col-md-4 col-md-offset-4 col-sm-10 col-sm-offset-1 content ${i18next.language}`}
                        aria-live="assertive"
                        role="dialog"
                        aria-labelledby="overlay-heading"
                        ref="content"
                    >
                        { overlay }
                    </div>
                </div>
            </section>
        );
    }

}
