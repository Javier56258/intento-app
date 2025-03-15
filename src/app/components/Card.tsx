export default function Card() {
    return (
        <div className="flex flex-col items-center bg-[#F3E8EE] border border-[#729B79] rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow max-w-sm dark:bg-[#2e2c2f]">
          <h2 className="text-lg font-bold text-[#475B63] mb-2 text-center dark:text-[#F3E8EE]">
            Card
          </h2>
          <div>
            <p className="text-sm text-[#475B63] dark:text-[#F3E8EE]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              feugiat, nunc eget tincidunt fermentum, nunc felis ultricies
              tortor, vel auctor odio mi ac dui.
            </p>
          </div>
          
        </div>
      )
}
