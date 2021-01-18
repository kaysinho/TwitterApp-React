import React, {useState} from 'react'
import PropTypes from 'prop-types'
import logo from '../../assets/images/twitter.png'

export const TwitCard = ( props: any) => {

    const  [twit, settwit] = useState<string>("");

    const [showMore, setShowmore] = useState<boolean>(false);
    const handleShowMore = ()=>{
      setShowmore(!showMore);
      console.log(props.twit, showMore)
    }

    return (
        <div className="card">
          <div className="white-card">
            <div className="profile-section">
              <img
                className="avatar"
                src="https://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg"
              />
              <div className="info">
                <h5 className="name"> { props.twit }</h5>
                <p className="user">@tuitero</p>
              </div>
            </div>
            <hr />
            <div className="twit-section">
              <p className="twit-text">Lorem Ipsum is simpl...</p>
            </div>
            <hr />
            <div className="icon-section">
              <div className="action-button">
                <i className="material-icons">reply</i>
              </div>
              <div className="action-button">
                <i className="material-icons">repeat</i>
              </div>
              <div className="action-button">
                <i className="material-icons">grade</i>
              </div>
            </div>
          </div>
          <div className="show-more-box">
            <div className="blue-circle"></div>
            <div className="blue-card">
            {(() => {
                  if (showMore) {
                    return               <div className="twit-section" id="1">
                    <hr />
                    <p className="twit-text">10:07 AM - 10 Apr 21</p>
                    <hr />
                    <p className="twit-text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a type
                      specimen book.
                    </p>
                  </div>;
                  } 
                })()}

              <div className="action-link">
                {(() => {
                  if (showMore) {
                    return <div className="more" id="3" onClick={ handleShowMore } > <i className="material-icons">keyboard_arrow_up</i> </div>;
                  } else {
                    return <div className="more" id="2" onClick={ handleShowMore }> ... más <i className="material-icons">keyboard_arrow_down</i> </div>;
                  }
                })()}
                

              </div>
            </div>
            <img className="twit-icon" src= {logo} />
          </div>
        </div>
    )
}

TwitCard.propTypes = {
    twit  : PropTypes.any.isRequired
}