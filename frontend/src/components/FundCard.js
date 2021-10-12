import React from 'react';
// assiging the $$ their values

export default function FundCard(props) {

        return (
        <div id="dollar-bills">
            <p>
                <div id="one-bill"> $1
                    </div>
                    <div id="five-bill"> $5
                    </div>
                    <div id="ten-bill"> $10
                    </div>
                    <div id="twentry-bill"> $20
                    </div>
                    <div> $50
                    </div>
                    <div> $100 {props.value}
                    </div>
            </p>
        </div>
    )
}