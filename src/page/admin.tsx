import React, {useState} from 'react'
import '../css/main.css'

export function CheckSection() {
    const [hash, setHash] = useState({})
    function checkBtn() {
        console.log(hash)
    }
    return (
        <div className={'check'}>
            <h3>check document</h3>
            <div className={'check-form'}>
                <input className={'check-input'} type="text" placeholder={'hash'} name={'hash'} required onChange={(event) => setHash(event.target.value)}/>
                <button className={'check-btn btn'} onClick={checkBtn} type={'submit'}>check</button>
            </div>
            <div className={'check-info'}>
                <p className={'check-info-one'}>registered at<span className={'check-info-one-span'}>Unknown</span></p>
                <p className={'check-info-one check-info-second'}>valid until<span className={'check-info-two-span'}>Unknown</span></p>
                <p className={'check-info-one'}>new version<span className={'check-info-three-span'}>0xytw76754b6b4352bn89m883728m8476bnx7n74cb47826</span></p>
            </div>
        </div>
    )
}
export function RegisterSection() {
    // const [checkRegisteredAt, setCheckRegisteredAt] = useState('Unknown')

    const [dateValue, setDateValue] = useState('');
    const [hashValue, setHashValue] = useState({});

    const inputValue = () => {
        const time = Math.floor(new Date(dateValue).getTime() / 1000)
        console.log(hashValue)
        console.log(time)
    }
    return (
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
    )
}
export function VersionSection() {
    const [dateValue, setDateValue] = useState('');
    const [oldHashValue, setOldHashValue] = useState({});
    const [newHashValue, setNewHashValue] = useState({});

    const inputValue = () => {
        const time = Math.floor(new Date(dateValue).getTime() / 1000)
        console.log(oldHashValue)
        console.log(newHashValue)
        console.log(time)
    }
    return (
        <div className={'version section'}>
            <h3 className={'version-title'}>registrate new version of document</h3>
            <div className={'version-form'}>
                <div className={'version-form-container'}>
                    <input className={'version-input-old'} type="text" placeholder={'old document hash'} required name={'old hash'} onChange={(event) => setOldHashValue(event.target.value)}/>
                    <input className={'version-input-new'} type="text" placeholder={'new document hash'} required name={'old hash'} onChange={(event) => setNewHashValue(event.target.value)}/>
                </div>
                <div className="version-until">
                    <input className={'version-until-input'} type="date" placeholder={'valid until'} name={'valid-until'} onChange={(event) => setDateValue(event.target.value.replace("-", ".").replace("-", "."))}/>
                </div>
                <a className={'version-btn btn'} onClick={inputValue} href="#">register</a>
            </div>
        </div>
    )
}
export function BulkSection() {
    const [bulkItems, setBulkItems] = useState<Partial<DocumentItem>[]>([{}])
    function onClickBtn() {
        console.log(bulkItems)
    }
    const setHash = (index, value) => {
        const updated = [...bulkItems]
        updated[index].hash = value
        setBulkItems(updated)
    }
    const setDate = (index, value) => {
        const updated = [...bulkItems]
        updated[index].date = Math.floor(new Date(value).getTime() / 1000)
        setBulkItems(updated)
    }
    return (
        <div className={'bulk section'}>
            <h3 className={'bulk-title'}>registrate bulk of new documents</h3>
            <div className={'bulk-form'}>
                { bulkItems.map( (item, index) => (
                    <div>
                        <div className={'second-container-bulk'}>
                            <input className={'bulk-input-one'} type="text" required placeholder={'hash'} name={'hash'}
                                   onChange={(event) => setHash(index, event.target.value)}/>
                            <div className="bulk-until">
                                <input className={'bulk-input-two'} type="date" placeholder={'valid until'} name={'valid-until'}
                                       onChange={(event) => setDate(index, event.target.value.replace("-", ".").replace("-", "."))}/>
                            </div>
                            { index === bulkItems.length - 1 &&
                                <a className={'bulk-form-plus'} onClick={() => setBulkItems([...bulkItems, 4])}>+</a>
                            }
                        </div>
                    </div>
                ))}
                <div className={'bulk-form-btn-container'}>
                    <a href="#" onClick={onClickBtn} className="bulk-form-btn">register all at once</a>
                </div>
            </div>
        </div>
    )
}

interface DocumentItemTwo {
    oldHash: string,
    newHash: string,
    date?: number
}

export function NewVersionsSection() {
    const [inputItems, setInputItems] = useState<Partial<DocumentItemTwo>[]>([{}])
    function onClickButton() {
        console.log(inputItems)
    }
    const setOldHash = (index, value) => {
        const updated = [...inputItems]
        updated[index].oldHash = value
        setInputItems(updated)
    }
    const setNewHash = (index, value) => {
        const updated = [...inputItems]
        updated[index].newHash = value
        setInputItems(updated)
    }
    const setValueDate = (index, value) => {
        const updated = [...inputItems]
        updated[index].date = Math.floor(new Date(value).getTime() / 1000)
        setInputItems(updated)
    }
    return (
        <div className={'new-versions section'}>
            <h3 className={'new-versions-title'}>registrate bulk of new versions of documents</h3>
            { inputItems.map( (item, index) => (
                <div className="new-versions-form">
                    <input className={'new-versions-input-old'} type="text" placeholder={'old document hash'} required name={'old hash'}
                           onChange={(event) => setOldHash(index, event.target.value)}/>
                    <input className={'new-versions-input-new'} type="text" placeholder={'new document hash'} required name={'new hash'}
                           onChange={(event) => setNewHash(index, event.target.value)}/>
                    <input className={'new-versions-until-input'} type="date" placeholder={'valid until'} name={'valid-until'}
                           onChange={(event) => setValueDate(index, event.target.value.replace("-", ".").replace("-", "."))}/>
                    { index === inputItems.length - 1 &&
                        <a className={'new-versions-form-plus'} onClick={() => setInputItems([...inputItems, {}])}>+</a>
                    }
                </div>
            ))}
            <a href="#" className={'new-versions-btn'} onClick={onClickButton}>register all at once</a>
        </div>
    )
}
export function TransferSection() {
    const [hash, setHash] = useState({})

    function onClickFunction() {
        console.log(hash)
    }

    return (
        <div className={'transfer section'}>
            <h3 className={'transfer-title'}>transfer ownership</h3>
            <div className="transfer-form">
                <input className={'transfer-input'} placeholder={'new owner address'} type="text" required name={'new-own-address'} onChange={(event) => setHash(event.target.value)}/>
                <a className={'transfer-btn btn'} onClick={onClickFunction} href="#">transfer</a>
            </div>
        </div>
    )
}