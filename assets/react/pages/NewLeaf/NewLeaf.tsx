import * as React from 'react';
import ButtonConnexion from "../../components/Button/ButtonConnexion";
import {useState} from "react";
import ButtonPublish from "../../components/Button/ButtonPublish";
import ButtonAddTrees from "../../components/Button/ButtonAddTrees";

const NewLeafPage = ({user}: { user: { id: number } }) => {
    const [message, setMessage] = useState<string>('')
    const [flag, setFlag] = useState<boolean>(false)

    return (
        <div className="new-leaf-page-container-mobile">
            <form>
                <div className={"sub-container"}>
                    <label id="message" className="label-message">
                        <span className="labels">Que voulez-vous dire aujourd’hui ?</span>
                        <textarea maxLength={512} placeholder={"Écrivez votre message ici..."} name={"message"}
                                  onChange={(e) => {
                                      if (e.target.value.length >= 512) {
                                          e.target.value = e.target.value.slice(0, 512)
                                      }
                                      setMessage(e.target.value)
                                  }
                                  }/>
                    </label>
                    <p className={"characters-count"}>{message.length}/512</p>
                    <div className={"flag-zone"}>
                        {flag ?
                            <p>Cette Leaf s’affichera sur votre arbre</p> :
                            <p>Ajouter cette leaf à mon arbre</p>
                        }
                        <ButtonAddTrees flag={flag} setFlag={setFlag}/>
                    </div>
                </div>
            </form>

            <div className={"decision-zone"}>
                <a href={"/"} className={"cancel-button"}>Annuler</a>
                <ButtonPublish flag={flag} date_note={new Date(Date.now())} id_user={user.id} content={message}/>
            </div>
        </div>
    );
};

export default NewLeafPage;
