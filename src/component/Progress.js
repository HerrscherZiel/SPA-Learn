import React from 'react';


class Progress extends React.Component{
    render(){
        return(

                <div>

                    <p>HTML</p>
                    <div class="progress">
                    <div class="progress-bar" role="progressbar" width ="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                    </div>
                    <hr></hr>

                    <p>HTML</p>
                    <div class="progress">
                    <div class="progress-bar" role="progressbar" width ="100%" aria-valuenow="50" aria-valuemin="50" aria-valuemax="100">25%</div>
                    </div>
                    <hr></hr>

                    <p>HTML</p>
                    <div class="progress">
                    <div class="progress-bar" role="progressbar" width ="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                    </div>
                    <hr></hr>

                    <p>HTML</p>
                    <div class="progress">
                    <div class="progress-bar" role="progressbar" width ="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                    </div>
                    <hr></hr>

                </div>

        )

    }

}

export default Progress;