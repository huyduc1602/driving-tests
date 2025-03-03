import '../styles/globals.css'

const buttons = [
    ["Xuất Phát", "Đi Bộ", "Ngang Dốc", "Vuông Góc", "Ngã Tư", "Vào Bài"],
    ["Quanh Co", "Ghép Dọc", "Đường Sắt", "Tăng Tốc", "Ghép Ngang", "Nhận Bài"],
    ["Khẩn Cấp", "Kết Thúc", "Thi Trượt", "Chúc Mừng", "Vượt đèn đỏ", "Dừng Non"],
    ["Ko Tắt Nhan", "Ko Bật Nhan", "Đè vạch", "Quá Dốc", "Đi sai đường", "Dừng Quá"]
];

export default function Home() {

    const playSound = (label: string): void => {
        const audio = new Audio(`/sounds/${label}.mp3`);
        audio.play();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
            <div className="container mx-auto p-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {buttons.flat().map((label, index) => (
                    <button
                        key={index}
                        className="w-full h-24 bg-gradient-to-r from-red-500 to-red-700 rounded-full text-white font-bold shadow-lg hover:from-red-600 hover:to-red-800 focus:ring-4 focus:ring-red-400 m-2 transition duration-300 border-2 border-transparent hover:border-red-500"
                        onClick={() => playSound(label)}
                    >
                        {label}
                    </button>
                ))}
            </div>
        </div>
    );
}
