import "./pagesCSS/Rewards.css";
import coinImage from "../assets/coin.png";
import TotalRewardBadeAnimation from "../assets/animations/TotalReward";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineUpload } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const Rewards = ({ setIsLoggedIn }) => {

  let [formData, setFormData] = useState({
    aadhar: "",
    password: "",
  });

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  let [showPassword, setShowPassword] = useState(false);
  let navigate = useNavigate();

  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    console.log(formData);
    navigate("/dashboard");
  }

  const handlePhotoUpload = () => {

  }

  return (
    <div className="rewardDiv">
      <div className="prev-rewards-info">
        <div className="prev-reward-info-left">
          <div><h1>Claimed Rewards ::</h1></div>
          <div className="prev-rewards-list-div">
            <table>
              <tr>
                <th>Model No.</th>
                <th>Description</th>
                <th>Date</th>
                <th>Coins</th>
              </tr>
              <tr>
                <td>AI208FJAOP221</td>
                <td>Camera, Sony (32mm)</td>
                <td>1 Sep, 2023</td>
                <td>
                  <div className="coins-data">
                    <p>20</p>
                    <img src={coinImage}></img>
                  </div>
                </td>
              </tr>
              <tr>
                <td>FI208FJA8AF221</td>
                <td>Samsung Phone Galaxy J8, 4GB Ram, 32GB Storage</td>
                <td>1 Sep, 2023</td>
                <td>
                  <div className="coins-data">
                    <p>15</p>
                    <img src={coinImage}></img>
                  </div>
                </td>
              </tr>
              <tr>
                <td>RI23FTOJAOP221</td>
                <td>Philips Trimmer, Blades (32mm)</td>
                <td>13 Sep, 2023</td>
                <td>
                  <div className="coins-data">
                    <p>7</p>
                    <img src={coinImage}></img>
                  </div>
                </td>
              </tr>
              <tr>
                <td>AI208FJAOP221</td>
                <td>Calculator, Casio, D8BMS scientific Calculator</td>
                <td>13 Sep, 2023</td>
                <td>
                  <div className="coins-data">
                    <p>11</p>
                    <img src={coinImage}></img>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className="prev-rewards-info-right">
          <div style={{ textAlign: 'center' }}><h1><strong>: Progress :</strong></h1></div>
          <div className="prev-rewards-info-right-div">
            <div className="total-reward-anime-div" style={{ margin: 'auto' }}>
              <TotalRewardBadeAnimation />
            </div>
            <p>Total <strong>223</strong> Coins Earned.</p>
            <button className="text-black w-full rounded-md py-2 px-5 mx-auto font-medium bg-yellow-500 mt-5">
              Redeem
            </button>
          </div>
        </div>
      </div>
      <div className="rewards-form">
        <h1>Check For Rewards On our E-Waste.</h1>
        <div className="rewards-form-div">
          <div className="rewards-form-left-div">
            <form
              onSubmit={submitHandler}
              className="w-full justify-center items-center flex flex-col gap-y-4 mt-6"
            >
              <label className="w-full">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                  Model No. <sup className="text-pink-200">*</sup>
                </p>
                <input
                  className="w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 py-2 px-3 border-[1px] border-richblack-700 focus:border-blue-100"
                  type="aadhar"
                  name="aadhar"
                  placeholder="Enter Model No."
                  value={formData.aadhar}
                  onChange={changeHandler}
                ></input>
              </label>
              <label className="w-full relative">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                  Description <sup className="text-pink-200">*</sup>
                </p>
                <textarea
                  className="w-full relative bg-richblack-800 rounded-[0.5rem] text-richblack-5 py-2 px-3 border-[1px] border-richblack-700"
                  name="description"
                  placeholder="Enter description"
                  value={formData.description}
                  onChange={changeHandler}
                  required
                ></textarea>
              </label>
              {/* Photo Upload Field */}
              <label className="w-full relative">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                  Upload Photo
                </p>
                <div className="border-[1px] border-richblack-700 bg-richblack-800 rounded-[0.5rem] py-2 px-3 flex items-center">
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                  <label htmlFor="photo" className="cursor-pointer text-blue-100">
                    <span className="mr-2">Choose File</span>
                    <AiOutlineUpload />
                  </label>
                  <span className="ml-2">
                    {formData.photo && formData.photo.name}
                  </span>
                </div>
              </label>

              <button className="text-black w-full rounded-md py-2 px-5 mx-auto font-medium bg-yellow-500 mt-5">
                Check
              </button>
            </form>
          </div>
          <div className="rewards-form-right-div">
            <p>
              By uploading a photo of your e-waste along with the model number and a description,
              you can check how many reward coins you can earn for responsible recycling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Rewards;
