import React, {Component} from 'react';
import RecipeReviewCard from './RecipeReviewCard';
import PaperSheet from './PaperSheet';
import ControlledExpansionPanels from './ControlledExpansionPanels';
import ImgMediaCard from './ImgMediaCard';
import IconAvatars from './IconAvatars';
import ImageAvatars from './ImageAvatars';

class Profile extends Component {
    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <div className="col s2">
                        
                   
                    </div>
                            <div className="col s8">
                        
                            <div>
                                <PaperSheet></PaperSheet>
                            </div>
                            </div>
                        
                    </div>
                </div>
            
        );
    }
}

export default Profile;