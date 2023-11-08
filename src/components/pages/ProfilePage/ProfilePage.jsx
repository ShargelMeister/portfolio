import React from 'react'

export const ProfilePage = () => {
    return (
      <div className='Content'>
        <div className="Profile">
            <div className="ProfileHeader">
                <h1>Личный кабинет</h1>
            </div>
            <div className="ProfileMain">
                <img src={'./img/peopleProfile.jpg'} alt="" className="ProfileImg" />
                <div className="ProfileText">
                    <div className="ProfileTop">
                        <h2>Здравствуйте,Алина</h2>
                        <p>ФИ - Алина Гельдаш</p>
                        <p>Компания - Justice</p>
                        <p>Почта - geldashal@gmail.com</p>                        
                    </div>
                    <div className="ProfileBottom">
                        <h3>Текущий прогресс тестирования</h3>
                        <p>ФИ - Алина Гельдаш</p>
                        <div className="ProfileButton">
                            <button>Change</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }