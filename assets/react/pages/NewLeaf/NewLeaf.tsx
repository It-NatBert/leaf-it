import * as React from 'react';
import ButtonConnexion from "../../components/Button/ButtonConnexion";
import {useState} from "react";
import ButtonPublish from "../../components/Button/ButtonPublish";
import ButtonAddTrees from "../../components/Button/ButtonAddTrees";

const NewLeafPage = () => {
    const [message, setMessage] = useState<string>('')
    const [flag, setFlag] = useState<boolean>(false)

    return (
        <div className="new-leaf-page-container-mobile">
            <h1 className="title">Nouvelle leaf</h1>
            <form>
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
            </form>

            <ButtonPublish flag={flag} date_note={new Date(Date.now())} id_user={3} content={message}/>
        </div>
    );
};

export default NewLeafPage;
