import React, {useState} from 'react'
import '../css/main.css'

import calendar from '../components/assets/img/calendar.jpg'

export function Admin() {
    const [bulkItems, setBulkItems] = useState([1])
    const [inputItems, setInputItems] = useState([1])
    // const [checkRegisteredAt, setCheckRegisteredAt] = useState('Unknown')

    const [dateValue, setDateValue] = useState('');
    const [hashValue, setHashValue] = useState({});

    const time = Math.floor(new Date(dateValue).getTime() / 1000)

    const inputValue = () => {
        console.log(hashValue)
        console.log(time)
    }

    return (
        <div className={'container'}>
            <div className={'check'}>
                <h3>check document</h3>
                <div className={'check-form'}>
                    <input className={'check-input'} type="text" placeholder={'hash'} name={'hash'} required/>
                    <button className={'check-btn btn'} type={'submit'}>check</button>
                </div>
                <div className={'check-info'}>
                    <p className={'check-info-one'}>registered at<span className={'check-info-one-span'}>Unknown</span></p>
                    <p className={'check-info-one check-info-second'}>valid until<span className={'check-info-two-span'}>Unknown</span></p>
                    <p className={'check-info-one'}>new version<span className={'check-info-three-span'}>0xytw76754b6b4352bn89m883728m8476bnx7n74cb47826</span></p>
                </div>
            </div>
            <div className={'register section'}>
                <h3 className={'register-title'}>registrate new document</h3>
                <div className="register-form">
                    <input className={'register-input-one'} type="text" placeholder={'hash'} name={'hash'} required onChange={(event) => setHashValue(event.target.value)}/>
                    <div className={'register-form-input-two'}>
                        <input className={'register-input-two'} type="date" placeholder={'valid until'} onChange={(event) => setDateValue(event.target.value.replace("-", ".").replace("-", "."))}/>
                    </div>
                    <button className={'btn register-btn'} onClick={inputValue} type={'submit'}>register</button>
                </div>
            </div>
            <div className={'version section'}>
                <h3 className={'version-title'}>registrate new version of document</h3>
                <div className={'version-form'}>
                    <div className={'version-form-container'}>
                        <input className={'version-input-old'} type="text" placeholder={'old document hash'} required name={'old hash'}/>
                        <input className={'version-input-new'} type="text" placeholder={'new document hash'} required name={'old hash'}/>
                    </div>
                    <div className="version-until">
                        <input className={'version-until-input'} type="date" placeholder={'valid until'} name={'valid-until'}/>
                    </div>
                    <a className={'version-btn btn'} href="#">register</a>
                </div>
            </div>
            <div className={'bulk section'}>
                <h3 className={'bulk-title'}>registrate bulk of new documents</h3>
                <div className={'bulk-form'}>
                    { bulkItems.map( (item, index) => (
                        <div>
                            <div className={'second-container-bulk'}>
                                <input className={'bulk-input-one'} type="text" required placeholder={'hash'} name={'hash'}/>
                                <div className="bulk-until">
                                    <input className={'bulk-input-two'} type="date" placeholder={'valid until'} name={'valid-until'}/>
                                </div>

                                { index === bulkItems.length - 1 &&
                                    <a className={'bulk-form-plus'} onClick={() => setBulkItems([...bulkItems, 4])}>+</a>
                                }
                            </div>
                        </div>
                    ))}
                    <div className={'bulk-form-btn-container'}>
                        <a href="#" className="bulk-form-btn">register all at once</a>
                    </div>
                </div>
            </div>
            <div className={'new-versions section'}>
                <h3 className={'new-versions-title'}>registrate bulk of new versions of documents</h3>
                { inputItems.map( (item, index) => (
                    <div className="new-versions-form">
                        <input className={'new-versions-input-old'} type="text" placeholder={'old document hash'} required name={'old hash'}/>
                        <input className={'new-versions-input-new'} type="text" placeholder={'new document hash'} required name={'old hash'}/>
                        <input className={'new-versions-until-input'} type="date" placeholder={'valid until'} name={'valid-until'}/>
                        { index === inputItems.length - 1 &&
                            <a className={'new-versions-form-plus'} onClick={() => setInputItems([...inputItems, 4])}>+</a>
                        }
                    </div>
                ))}
                <a href="#" className={'new-versions-btn'}>register all at once</a>
            </div>
            <div className={'transfer section'}>
                <h3 className={'transfer-title'}>transfer ownership</h3>
                <div className="transfer-form">
                    <input className={'transfer-input'} placeholder={'new owner address'} type="text" required name={'new-own-address'}/>
                    <a className={'transfer-btn btn'} href="#">transfer</a>
                </div>
            </div>
        </div>
    )
}