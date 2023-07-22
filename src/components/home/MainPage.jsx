import React, { useContext } from 'react'
import './MainPage.css'
import TableRow from './TableRow'
import AllContexts from '../../contextAPI/Context'

const MainPage = (props) => {
    // props
    const { users } = props


    // context
    const { setdisplayForm } = useContext(AllContexts)

    return (
        <div className='mainPageContainer'>
            {/* user logo */}

            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M29.3333 16.5C29.3333 18.4449 28.5607 20.3101 27.1854 21.6854C25.8102 23.0607 23.9449 23.8333 22 23.8333C20.0551 23.8333 18.1898 23.0607 16.8145 21.6854C15.4393 20.3101 14.6667 18.4449 14.6667 16.5C14.6667 14.555 15.4393 12.6898 16.8145 11.3145C18.1898 9.93924 20.0551 9.16663 22 9.16663C23.9449 9.16663 25.8102 9.93924 27.1854 11.3145C28.5607 12.6898 29.3333 14.555 29.3333 16.5ZM25.6667 16.5C25.6667 17.4724 25.2803 18.405 24.5927 19.0927C23.9051 19.7803 22.9725 20.1666 22 20.1666C21.0275 20.1666 20.0949 19.7803 19.4073 19.0927C18.7196 18.405 18.3333 17.4724 18.3333 16.5C18.3333 15.5275 18.7196 14.5949 19.4073 13.9072C20.0949 13.2196 21.0275 12.8333 22 12.8333C22.9725 12.8333 23.9051 13.2196 24.5927 13.9072C25.2803 14.5949 25.6667 15.5275 25.6667 16.5Z" fill="#4F617D" />
                <path fillRule="evenodd" clipRule="evenodd" d="M22 1.83331C10.8625 1.83331 1.83333 10.8625 1.83333 22C1.83333 33.1375 10.8625 42.1666 22 42.1666C33.1375 42.1666 42.1667 33.1375 42.1667 22C42.1667 10.8625 33.1375 1.83331 22 1.83331ZM5.5 22C5.5 25.8316 6.80716 29.359 8.998 32.1603C10.5366 30.1398 12.5215 28.5024 14.7976 27.3759C17.0738 26.2494 19.5795 25.6644 22.1192 25.6666C24.6259 25.6643 27.1002 26.2341 29.3534 27.3327C31.6066 28.4314 33.5793 30.0298 35.1212 32.0063C36.7097 29.9229 37.7792 27.4912 38.2413 24.9124C38.7034 22.3336 38.5448 19.6818 37.7786 17.1765C37.0124 14.6711 35.6606 12.3842 33.8351 10.505C32.0095 8.62586 29.7628 7.20839 27.2807 6.36991C24.7986 5.53144 22.1525 5.29606 19.5614 5.68326C16.9703 6.07047 14.5086 7.06911 12.3801 8.59658C10.2515 10.124 8.51732 12.1364 7.32092 14.4672C6.12452 16.7979 5.50033 19.3801 5.5 22ZM22 38.5C18.2122 38.5057 14.5388 37.2026 11.6013 34.8113C12.7837 33.1187 14.3574 31.7367 16.1887 30.7829C18.0199 29.8291 20.0544 29.3318 22.1192 29.3333C24.1581 29.3317 26.1681 29.8165 27.982 30.7476C29.796 31.6787 31.3617 33.0291 32.549 34.6866C29.5887 37.1556 25.8547 38.5054 22 38.5Z" fill="#4F617D" />
            </svg>

            {/* gold silver both */}
            <div className="gold_silver_options_container marginLeft_for_mainContainer">
                <span>Gold</span>
                <span>Silver</span>
                <span className='active' >Both</span>
            </div>

            {/* add party container */}
            <div className="addPartyContainer marginLeft_for_mainContainer">
                <div className="heading_addParty">
                    <span>Party</span>
                    <div onClick={() => setdisplayForm(true)} className="addPartyBtn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                            <path d="M7.78052 15C3.57867 15 0.172607 11.6423 0.172607 7.5C0.172607 3.35775 3.57867 0 7.78052 0C11.9824 0 15.3884 3.35775 15.3884 7.5C15.3884 11.6423 11.9824 15 7.78052 15ZM7.78052 13.5C9.39472 13.5 10.9428 12.8679 12.0842 11.7426C13.2256 10.6174 13.8669 9.0913 13.8669 7.5C13.8669 5.9087 13.2256 4.38258 12.0842 3.25736C10.9428 2.13214 9.39472 1.5 7.78052 1.5C6.16633 1.5 4.61824 2.13214 3.47684 3.25736C2.33543 4.38258 1.69419 5.9087 1.69419 7.5C1.69419 9.0913 2.33543 10.6174 3.47684 11.7426C4.61824 12.8679 6.16633 13.5 7.78052 13.5ZM8.54131 8.25V11.25C8.54131 11.4489 8.46116 11.6397 8.31848 11.7803C8.17581 11.921 7.9823 12 7.78052 12C7.57875 12 7.38524 11.921 7.24256 11.7803C7.09988 11.6397 7.01973 11.4489 7.01973 11.25V8.25H3.97656C3.77479 8.25 3.58128 8.17098 3.4386 8.03033C3.29593 7.88968 3.21577 7.69891 3.21577 7.5C3.21577 7.30109 3.29593 7.11032 3.4386 6.96967C3.58128 6.82902 3.77479 6.75 3.97656 6.75H7.01973V3.75C7.01973 3.55109 7.09988 3.36032 7.24256 3.21967C7.38524 3.07902 7.57875 3 7.78052 3C7.9823 3 8.17581 3.07902 8.31848 3.21967C8.46116 3.36032 8.54131 3.55109 8.54131 3.75V6.75H11.5845C11.7863 6.75 11.9798 6.82902 12.1224 6.96967C12.2651 7.11032 12.3453 7.30109 12.3453 7.5C12.3453 7.69891 12.2651 7.88968 12.1224 8.03033C11.9798 8.17098 11.7863 8.25 11.5845 8.25H8.54131Z" fill="#4F617D" />
                        </svg>
                        Add Party
                    </div>
                </div>


                <div className="prices_silver_gold">
                    {/* silver */}
                    <div className="ammount">
                        <span className="ammount_heading">
                            Silver
                        </span>
                        <span className="actualAmmount">
                            14.200 Kg <br /> Lena
                        </span>
                    </div>
                    {/* gold */}
                    <div className="ammount">
                        <span className="ammount_heading">
                            Gold
                        </span>
                        <span className="actualAmmount">
                            25.966 Gm <br /> Lena
                        </span>
                    </div>
                    {/* ammount */}
                    <div className="ammount">
                        <span className="ammount_heading">
                            Ammount
                        </span>
                        <span className="actualAmmount diffColor_ammount">
                            ₹1,850.00 <br /> Dena
                        </span>
                    </div>
                </div>
            </div>

            {/* search container */}
            <div className="searchBoxContainer marginLeft_for_mainContainer">
                <input type="text" placeholder='Search Karigar' />
                <button>Search</button>
            </div>

            {/* table */}
            <div className="tableContainer">
                <table className='marginLeft_for_mainContainer'>
                    <thead>
                        <tr>
                            <th >#</th>
                            <th>Party Name</th>
                            <th>Mobile Number</th>
                            <th>Gold</th>
                            <th>Silver</th>
                            <th>Amount</th>
                            <th >Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, idx) => <TableRow key={user.id} user={user} id={user.id} name={user.name} ph={user.ph} idx={idx+1} />)}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MainPage
