import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Main = () => {

    const [urls, setUrls] = useState(null)
    const [firstColumn, setFirstColumn] = useState(null)
    const [secondColumn, setSecondColumn] = useState(null)
    const [thirdColumn, setThirdColumn] = useState(null)

    const createColumns = () => {

        if (urls.length % 3 === 0) {
            const division = urls.length / 3

            const firstTmp = []
            for (let i = 0; i < division; i++) {
                firstTmp.push(urls[i])
            }
            setFirstColumn(firstTmp)

            const secondTmp = []
            const secondEnd = division * 2
            for (let i = division; i < secondEnd; i++) {
                secondTmp.push(urls[i])
            }
            setSecondColumn(secondTmp)

            const thirdTmp = []
            const thirdEnd = division * 3
            for (let i = secondEnd; i < thirdEnd; i++) {
                thirdTmp.push(urls[i])
            }
            setThirdColumn(thirdTmp)

        } else {

            const division = Math.round(urls.length / 3)
            const remaining = urls.length - (division * 3)
            const firstCol = division + remaining

            const firstTmp = []
            for (let i = 0; i < firstCol; i++) {
                firstTmp.push(urls[i])
            }
            setFirstColumn(firstTmp)

            const secondTmp = []
            const secondEnd = firstCol + division
            for (let i = firstCol; i < secondEnd; i++) {
                secondTmp.push(urls[i])
            }
            secondColumn(secondTmp)

            const thirdTmp = []
            const thirdEnd = secondEnd + division
            for (let i = secondEnd; i < thirdEnd; i++) {
                thirdTmp.push(urls[i])
            }
            setThirdColumn(thirdTmp)
        }

    }

    const getPhotos = () => {
        axios
        .get('http://localhost:2000/api/getter')
        .then(res => {
            let tmp = []
            res.data.data.map(value => {
                const url = 'http://localhost:2000/public/images/' + value
                tmp.push(url)
            })
            setUrls(tmp)
            
        })
    }

    useEffect(() => {
        if (urls === null) {
            getPhotos()
        }

        if (urls !== null) {
            createColumns()
        }
        
    }, [urls])
    

    return (
        <div style={{ marginTop: '5vw', marginLeft: '5vw', maxWidth: '90vw', display: 'flex', alignItems: 'start', gap: '2vw'}}>
            {
                (firstColumn === null) ?
                <div></div> :
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2vw'}}>
                    {
                        firstColumn.map((value, key) => (
                            <img key={key} src={ value } alt="photo" style={{width: '28vw',  height: '100%'}} />
                        ))
                    }
                </div>
            }

            {
                (secondColumn === null) ?
                <div></div> :
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2vw'}}>
                    {
                        secondColumn.map((value, key) => (
                            <img key={key} src={ value } alt="photo" style={{width: '28vw',  height: '100%'}} />
                        ))
                    }
                </div>
            }

            {
                (thirdColumn === null) ?
                <div></div> :
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2vw'}}>
                    {
                        thirdColumn.map((value, key) => (
                            <img key={key} src={ value } alt="photo" style={{width: '28vw',  height: '100%'}} />
                        ))
                    }
                </div>
            }
        </div>
    );
}

export default Main;
