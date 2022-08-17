import { MailIcon, PhoneIcon } from "@heroicons/react/solid";

export default function PlayerCard({ name, choice }) {
  return (
    <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6 w-[50%] border-2 m-5 text-center">
      <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
        <div className="ml-4 mt-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h2>{name}</h2>
              <div>
                <p className="bold text-2xl">{choice}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
