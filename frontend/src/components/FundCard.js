import React from 'react';
// assiging the $$ their values

export default function FundCard(props) {

        return (
        <div id="dollar-bills">
            
                <p id="one-bill"> $1
                </p>

                <p id="five-bill"> $5
                </p>
            
                <p id="ten-bill"> $10
                </p>

                <p id="twenty-bill"> $20
                </p>

                <p id="fifty-bill"> $50
                </p>

                <p id="hundred-bill"> $100 {props.value}
                </p>
        </div>
    )
}