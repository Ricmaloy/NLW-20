import { CreateRoomForm } from '@/components/create-room-form'
import { RoomsList } from '@/components/room-list'

export function CreateRoom() {
  return (
    <div className="min-h-screen p-4">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-2 items-start gap-8">
          <CreateRoomForm />

          <RoomsList />
        </div>
      </div>
    </div>
  )
}
