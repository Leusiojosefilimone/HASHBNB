import React from 'react'
import { Link } from 'react-router-dom'

const Booking = ({booking, place = false}) => {

  return (
     <Link
          to={`/place/${booking.place._id}`}
          className="fle m-3 flex items-center gap-4 rounded-2xl bg-gray-100 p-6"
          key={booking.place}
        > {place ? "" : <img
            className="aspect-square max-w-56 rounded-2xl object-center"
            src={booking.place.photo[0]}
            alt="Foto da acomodacao"
          />}
         
          <div className="flex flex-col gap-2">
           {place ? <p className="text-xl font-bold">Voce ja tem uma reserva neste lugar!</p> : <p className="text-xl font-bold">{booking.place.title}</p>}
            <div>
              <p className=""><span className="font-semibold">Checkin:</span>  {new Date(booking.checkin + "GMT+02:00").toLocaleDateString("pt-BR")}</p>
              <p className=""><span className="font-semibold">Checkout:</span> {new Date(booking.checkout + "GMT+02:00").toLocaleDateString("pt-BR")}</p>
              <p className=""><span className="font-semibold">Convidados: </span> {booking.guest}</p>
            </div>
          </div>
        </Link>
  )
}

export default Booking