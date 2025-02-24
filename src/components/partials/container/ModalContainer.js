

function ModalContainer({children ,isOpen,setIsOpen}) {
  if(!isOpen) return ;
  return (
    <div className="fixed top-0 right-0 w-svw h-svh bg-black/20 z-10 backdrop-blur-sm">
      <div className="w-full h-full flex items-center justify-center">
        <div className="min-w-10 min-h-10 ">{children}</div>
      </div>
    </div>
//     <div className="fixed top-0 right-0 w-svw h-svh z-10">
//   {/* لایه‌ی پس‌زمینه‌ی کم‌رنگ و بلور */}
//   <div className="absolute top-0 right-0 w-full h-full bg-black/20 backdrop-blur-sm" />

//   {/* لایه‌ی محتوای مدال */}
//   <div className="w-full h-full flex items-center justify-center">
//     <div className="min-w-10 min-h-10 ">{children}</div>
//   </div>
// </div>




  )
}

export default ModalContainer