<template>
  <div class="mx-auto w-full flex max-w-[768px] relative">
    <div class="bg-main w-full flex flex-col px-5">
      <h2
        class="font-[OPPOSans-H] mt-5 text-2xl text-[#137D8E] text-center leading-[55px] not-italic"
      >
        点击观看注射演示视频
      </h2>

      <div class="w-full overflow-hidden rounded-[10px] mt-[10px] bg-white">
        <video
          controls
          class="w-full"
          src="/video/video-lite.mp4"
          poster="/video/video-poster.png"
        ></video>
      </div>

      <div class="mt-[30px] flex flex-col">
        <div class="flex flex-col" data-aos="fade-up">
          <a
            href="/1"
            class="font-[OPPOSans-H] text-[17px] text-[#4b93a5] leading-[30px] text-left not-italic"
          >
            【聚乙二醇洛塞那肽注射液说明书】>>
          </a>
          <a
            href="/2"
            class="font-[OPPOSans-H] text-[17px] text-[#4b93a5] leading-[30px] text-left not-italic"
          >
            【聚乙二醇洛塞那肽注射液预填充注射笔使用说明】>>
          </a>
        </div>

        <div data-aos="fade-up" class="mt-[23px] flex flex-col gap-y-[22px]">
          <div
            class="before:content-[''] before:flex before:mt-[13px] before:mr-2 before:w-[4px] before:h-[4px] before:rounded-full before:flex-shrink-0 before:bg-dot flex font-[Helvetica] text-[18px] text-black leading-[30px] text-left not-italic"
          >
            如您需要自行注射，请先点击下载说明书，认真并完整阅读聚乙二醇洛塞那肽注射液说明书和注射笔使用说明。每次使用注射笔时，请遵循这些说明。
          </div>

          <div
            class="before:content-[''] before:flex before:mt-[13px] before:mr-2 before:w-[4px] before:h-[4px] before:rounded-full before:flex-shrink-0 before:bg-dot flex font-[Helvetica] text-[18px] text-black leading-[30px] text-left not-italic"
          >
            请向您的医生或护士咨询如何正确注射聚乙二醇洛塞那肽注射液，请按处方使用药物。
          </div>

          <div
            class="before:content-[''] before:flex before:mt-[13px] before:mr-2 before:w-[4px] before:h-[4px] before:rounded-full before:flex-shrink-0 before:bg-dot flex font-[Helvetica] text-[18px] text-black leading-[30px] text-left not-italic"
          >
            如果您是盲人或者有视力障碍，请不要在无人协助的情况下使用本注射笔请寻求视力良好且经过培训的人员的帮助。
          </div>
        </div>
      </div>

      <div
        class="mt-[68px] relative flex flex-col items-center bg-white px-[18px] rounded-[11px] pb-[28px]"
      >
        <div
          class="absolute font-[OPPOSans-H] rounded-t-[11px] text-[6.2vw] whitespace-nowrap md:text-[28px] flex items-center px-[36px] justify-center top-[-30px] text-white h-[53px] bg-title"
        >
          孚来美®产品信息
        </div>

        <div
          data-aos="fade-up"
          class="font-[Helvetica] mt-[50px] text-[20px] text-black leading-[30px] text-left not-italic"
        >
          聚乙二醇洛塞那肽（商品名孚来美®）是由江苏豪森药业集团有限公司研制的长效GLP-1受体激动剂，可促进葡萄糖依赖的胰岛素分泌，配合饮食控制和运动，单药或与二甲双胍联合，用于改善成人2型糖尿病患者的血糖控制。
        </div>

        <div class="flex flex-col w-full" data-aos="fade-up">
          <span class="mt-[28px] w-full flex items-center">
            <i class="bg-dot2 w-[6px] h-[18px] flex rounded-[6px]"></i>
            <p class="font-[OPPOSans-H] text-[#3BA7BF] text-[18px] ml-[6px]">
              产品规格
            </p>
          </span>
          <div
            class="font-[Helvetica] mt-[16px] text-[18px] text-black leading-[30px] text-left not-italic"
          >
            聚乙二醇洛塞那肽注射液预填充注射笔，每支内含聚乙二醇洛塞那肽注射液0.5ml：0.2mg，每支注射笔仅提供一次给药。
          </div>
        </div>

        <div class="flex flex-col w-full" data-aos="fade-up">
          <span class="mt-[25px] w-full flex items-center">
            <i class="bg-dot2 w-[6px] h-[18px] flex rounded-[6px]"></i>
            <p class="font-[OPPOSans-H] text-[#3BA7BF] text-[18px] ml-[6px]">
              用法用量
            </p>
          </span>

          <div class="mt-[16px] flex flex-col gap-y-[22px]">
            <p
              class="before:content-[''] before:flex before:mt-[13px] before:mr-2 before:w-[4px] before:h-[4px] before:rounded-full before:flex-shrink-0 before:bg-dot flex font-[Helvetica] text-[18px] text-black leading-[30px] text-left not-italic"
            >
              本药品每7天给药一次，可以在一天中任何时间使用。
            </p>
            <p
              class="before:content-[''] before:flex before:mt-[13px] before:mr-2 before:w-[4px] before:h-[4px] before:rounded-full before:flex-shrink-0 before:bg-dot flex font-[Helvetica] text-[18px] text-black leading-[30px] text-left not-italic"
            >
              对于饮食控制和运动基础上血糖控制不佳的患者，或二甲双胍基础用药血糖控制不佳的患者，本药品推荐剂量为0.2mg每周一次腹部皮下注射。
            </p>
            <p
              class="before:content-[''] before:flex before:mt-[13px] before:mr-2 before:w-[4px] before:h-[4px] before:rounded-full before:flex-shrink-0 before:bg-dot flex font-[Helvetica] text-[18px] text-black leading-[30px] text-left not-italic"
            >
              忘记注射时可给予补充注射，但补充注射与之前或之后的给药之间应至少间隔3天。改变给药计划后应重新调整注射时间表。
            </p>
          </div>
        </div>

        <div class="flex flex-col w-full" data-aos="fade-up">
          <span class="mt-[25px] w-full flex items-center">
            <i class="bg-dot2 w-[6px] h-[18px] flex rounded-[6px]"></i>
            <p class="font-[OPPOSans-H] text-[#3BA7BF] text-[18px] ml-[6px]">
              药物存储
            </p>
          </span>

          <div class="mt-[16px] flex flex-col gap-y-[22px]">
            <p
              class="before:content-[''] before:flex before:mt-[13px] before:mr-2 before:w-[4px] before:h-[4px] before:rounded-full before:flex-shrink-0 before:bg-dot flex font-[Helvetica] text-[18px] text-black leading-[30px] text-left not-italic"
            >
              未使用的注射笔存放于原包装盒内避光保存，应贮藏在2℃-8℃冰箱中，请不要将注射笔冷冻，如果注射笔已被冻结，请不要使用。如果没有制冷条件，本药品可在室温（不超过30℃）条件下贮藏28天。
            </p>
            <p
              class="before:content-[''] before:flex before:mt-[13px] before:mr-2 before:w-[4px] before:h-[4px] before:rounded-full before:flex-shrink-0 before:bg-dot flex font-[Helvetica] text-[18px] text-black leading-[30px] text-left not-italic"
            >
              请将注射笔始终放置在儿童看不到且接触不到的位置。注射笔弃置后，也请保持医疗废弃盒远离儿童视力和接触范围。
            </p>
          </div>
        </div>
      </div>

      <div
        class="mt-[68px] relative flex flex-col items-center bg-white px-[18px] rounded-[11px] pb-[28px]"
      >
        <div
          class="absolute font-[OPPOSans-H] rounded-t-[11px] whitespace-nowrap text-[6.2vw] md:text-[28px] flex items-center px-[36px] justify-center top-[-30px] text-white h-[53px] bg-title"
        >
          注射笔使用方法
        </div>

        <div class="flex flex-col w-full mt-[50px]" data-aos="fade-up">
          <span class="w-full flex items-center">
            <i class="bg-dot2 w-[6px] h-[18px] flex rounded-[6px]"></i>
            <p class="font-[OPPOSans-H] text-[#3BA7BF] text-[18px] ml-[6px]">
              步骤一：认识注射笔结构
            </p>
          </span>
          <div
            class="font-[Helvetica] mt-[21px] text-[18px] text-black leading-[30px] text-left not-italic"
          >
            注射笔包括深绿色的注射按钮、手持区、透明控制区、护帽等组件。
          </div>
          <div class="bg-[rgba(59,167,191,.15)] flex mt-[15px]">
            <div class="bg-dot w-[3px] flex-shrink-0 h-full"></div>
            <p
              class="font-[Helvetica] px-[15px] py-[12px] text-[14px] text-black leading-[24px] text-left not-italic"
            >
              注意：在您未准备好注射前请勿取下注射笔的护帽。注射笔护帽一旦被拔出，笔内注射针头上的护帽也会被一并拔出，导致针头暴露，护帽拔出后也无法再重新套上。
            </p>
          </div>
        </div>

        <div
          data-aos="fade-up"
          class="w-full mt-[28px] flex items-center justify-center"
        >
          <img src="/images/img1.png" class="w-full h-full object-contain" />
        </div>

        <div class="flex flex-col w-full mt-[35px]" data-aos="fade-up">
          <span class="w-full flex items-center">
            <i class="bg-dot2 w-[6px] h-[18px] flex rounded-[6px]"></i>
            <p class="font-[OPPOSans-H] text-[#3BA7BF] text-[18px] ml-[6px]">
              步骤二：注射前准备
            </p>
          </span>
          <div class="mt-[23px] flex flex-col gap-y-[22px]">
            <div
              class="before:content-[''] before:flex before:mt-[13px] before:mr-2 before:w-[4px] before:h-[4px] before:rounded-full before:flex-shrink-0 before:bg-dot flex font-[Helvetica] text-[18px] text-black leading-[30px] text-left not-italic"
            >
              从冰箱中取出药品。提前将药品从冰箱中取出，置于室温环境中，以使药品自然升至室温，请勿阳光直射或采用其他方式加热注射笔。
            </div>
            <div
              class="before:content-[''] before:flex before:mt-[13px] before:mr-2 before:w-[4px] before:h-[4px] before:rounded-full before:flex-shrink-0 before:bg-dot flex font-[Helvetica] text-[18px] text-black leading-[30px] text-left not-italic"
            >
              请仔细核对本药品上的标签，确认是聚乙二醇洛塞那肽注射液并且产品在有效期内。
            </div>
            <div
              class="before:content-[''] before:flex before:mt-[13px] before:mr-2 before:w-[4px] before:h-[4px] before:rounded-full before:flex-shrink-0 before:bg-dot flex font-[Helvetica] text-[18px] text-black leading-[30px] text-left not-italic"
            >
              清洁双手，将预填充注射笔从包装盒中取出，检查注射笔以及药品。
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          class="w-full mt-[24px] flex items-center justify-center"
        >
          <img src="/images/img2.png" class="w-full h-full object-contain" />
        </div>

        <div
          class="bg-[rgba(59,167,191,.15)] flex mt-[28px] w-full"
          data-aos="fade-up"
        >
          <div class="bg-dot w-[3px] flex-shrink-0 h-full"></div>
          <div class="flex flex-col px-[15px] py-[12px]">
            <p
              class="font-[Helvetica] text-[14px] text-black leading-[22px] text-left not-italic"
            >
              若您发现以下情况请勿使用：
            </p>
            <p
              class="font-[Helvetica] mt-[11px] text-[14px] text-black leading-[22px] text-left not-italic"
            >
              ① 产品不正确，或者已经超过产品有效期；
            </p>
            <p
              class="font-[Helvetica] mt-[5px] text-[14px] text-black leading-[22px] text-left not-italic"
            >
              ② 笔已损坏，或者发现组件缺失、未牢固连接等情况；
            </p>
            <p
              class="font-[Helvetica] mt-[5px] text-[14px] text-black leading-[22px] text-left not-italic"
            >
              ③ 药液出现颗粒或溶液出现浑浊不透明；
            </p>
            <p
              class="font-[Helvetica] mt-[5px] text-[14px] text-black leading-[22px] text-left not-italic"
            >
              ④ 注射笔从高处跌落，请勿使用。
            </p>
          </div>
        </div>

        <div class="flex mt-[37px] flex-col w-full" data-aos="fade-up">
          <span class="w-full flex items-center">
            <i class="bg-dot2 w-[6px] h-[18px] flex rounded-[6px]"></i>
            <p class="font-[OPPOSans-H] text-[#3BA7BF] text-[18px] ml-[6px]">
              步骤三：选择注射部位
            </p>
          </span>
          <div class="mt-[22px] flex flex-col gap-y-[22px]">
            <div
              class="before:content-[''] before:flex before:mt-[13px] before:mr-2 before:w-[4px] before:h-[4px] before:rounded-full before:flex-shrink-0 before:bg-dot flex font-[Helvetica] text-[18px] text-black leading-[30px] text-left not-italic"
            >
              聚乙二醇洛塞那肽注射液为腹部皮下注射用药，请避开肚脐周围5cm区域，不能静脉或肌肉注射。
            </div>
            <div
              class="before:content-[''] before:flex before:mt-[13px] before:mr-2 before:w-[4px] before:h-[4px] before:rounded-full before:flex-shrink-0 before:bg-dot flex font-[Helvetica] text-[18px] text-black leading-[30px] text-left not-italic"
            >
              建议经常变换腹部注射部位，避免长期注射腹部同一部位。请勿在皮肤压痛、发硬、发红、发热、淤青或任何异常区域注射。
            </div>
          </div>
        </div>

        <div
          class="w-full mt-[30px] flex items-center justify-center"
          data-aos="fade-up"
        >
          <img src="/images/img3.png" class="w-full h-full object-contain" />
        </div>

        <div class="flex flex-col w-full mt-[30px]" data-aos="fade-up">
          <span class="w-full flex items-center">
            <i class="bg-dot2 w-[6px] h-[18px] flex rounded-[6px]"></i>
            <p class="font-[OPPOSans-H] text-[#3BA7BF] text-[18px] ml-[6px]">
              步骤四：开始注射
            </p>
          </span>
        </div>

        <div data-aos="fade-up" class="mt-[23px] flex flex-col w-full">
          <div
            class="before:content-[''] before:flex before:mt-[13px] before:mr-2 before:w-[4px] before:h-[4px] before:rounded-full before:flex-shrink-0 before:bg-dot flex font-[Helvetica] text-[18px] text-black leading-[30px] text-left not-italic"
          >
            用酒精棉擦拭注射区域皮肤表面，并使皮肤自然变干；
          </div>
          <div
            class="w-full mt-[15px] flex items-center justify-center relative"
          >
            <img src="/images/img4.png" class="w-full h-full object-contain" />
            <img
              src="/images/img5.png"
              class="w-full h-full object-contain absolute top-0 left-0 moveCircle"
            />
          </div>
        </div>

        <div data-aos="fade-up" class="mt-[28px] flex flex-col w-full">
          <div
            class="before:content-[''] before:flex before:mt-[13px] before:mr-2 before:w-[4px] before:h-[4px] before:rounded-full before:flex-shrink-0 before:bg-dot flex font-[Helvetica] text-[18px] text-black leading-[30px] text-left not-italic"
          >
            一只手握住注射笔的手持区，用另一只手按原方向拔出注射笔护帽并丢弃。
          </div>
          <div
            class="w-full mt-[15px] flex items-center justify-center relative"
          >
            <img src="/images/img7.png" class="w-full h-full object-contain" />
            <img
              src="/images/img6.png"
              class="w-full h-full object-contain absolute top-0 left-0 moveLeft"
            />
          </div>

          <div class="bg-[rgba(59,167,191,.15)] flex mt-[28px]">
            <div class="bg-dot w-[3px] flex-shrink-0 h-full"></div>
            <p
              class="font-[Helvetica] px-[15px] py-[12px] text-[14px] text-black leading-[24px] text-left not-italic"
            >
              拔出注射笔护帽时，针头上的护帽也会被一并拔出，您将通过透明控制区看见注射针头。此时请注意检查针头有无异常，如果针头折弯或损坏，切勿使用。护帽拔出后，如果针尖上挂有液滴，这是正常的，不会影响您的给药。
            </p>
          </div>
        </div>

        <div data-aos="fade-up" class="mt-[28px] flex flex-col w-full">
          <div
            class="before:content-[''] before:flex before:mt-[13px] before:mr-2 before:w-[4px] before:h-[4px] before:rounded-full before:flex-shrink-0 before:bg-dot flex font-[Helvetica] text-[18px] text-black leading-[30px] text-left not-italic"
          >
            注射时要握住手持区，将注射笔针头部位的透明安全盖以90°垂直按压在皮肤上。将注射笔向下按压，并将其牢牢固定在注射部位，透明安全盖将随着您的按压回缩，按压直到您感觉到停止点，透明安全盖不再继续回缩。
          </div>
          <div
            class="w-full mt-[15px] flex items-center justify-center relative"
          >
            <img src="/images/img15.png" class="w-full h-full object-contain" />
            <img
              src="/images/img14.png"
              class="w-full h-full object-contain absolute left-0 moveBottom"
            />
            <img
              src="/images/img18.png"
              class="w-full h-full object-contain absolute left-0 moveBottom2"
            />
            <img
              src="/images/img19.png"
              class="w-full h-full object-contain absolute left-0"
            />
          </div>
        </div>

        <div data-aos="fade-up" class="mt-[28px] flex flex-col w-full">
          <div
            class="before:content-[''] before:flex before:mt-[13px] before:mr-2 before:w-[4px] before:h-[4px] before:rounded-full before:flex-shrink-0 before:bg-dot flex font-[Helvetica] text-[18px] text-black leading-[30px] text-left not-italic"
          >
            当按压到停止点时，保持注射笔紧贴皮肤，用拇指或食指按动注射按钮，您将听到“咔哒”声，这表示开始注射，注射笔会将针头自动插入您的皮肤并注射药物，注射过程中请一直保持注射笔稳定在注射部位，且紧贴您的皮肤，大约10秒后运动停止时注射完成。
          </div>
          <div class="w-full mt-[15px] flex items-center justify-center">
            <img src="/images/img16.png" class="w-full h-full object-contain" />
            <img
              src="/images/img17.png"
              class="w-full h-full object-contain absolute left-0 moveDisplay"
            />
          </div>
        </div>

        <div class="flex flex-col w-full mt-[32px]" data-aos="fade-up">
          <span class="w-full flex items-center">
            <i class="bg-dot2 w-[6px] h-[18px] flex rounded-[6px]"></i>
            <p class="font-[OPPOSans-H] text-[#3BA7BF] text-[18px] ml-[6px]">
              步骤五：完成注射
            </p>
          </span>
          <div class="mt-[23px] flex flex-col gap-y-[22px]">
            <div
              class="before:content-[''] before:flex before:mt-[13px] before:mr-2 before:w-[4px] before:h-[4px] before:rounded-full before:flex-shrink-0 before:bg-dot flex font-[Helvetica] text-[18px] text-black leading-[30px] text-left not-italic"
            >
              药物注射完后，请继续保持注射笔紧贴皮肤2-3秒钟。
            </div>
            <div
              class="before:content-[''] before:flex before:mt-[13px] before:mr-2 before:w-[4px] before:h-[4px] before:rounded-full before:flex-shrink-0 before:bg-dot flex font-[Helvetica] text-[18px] text-black leading-[30px] text-left not-italic"
            >
              从注射部位垂直于皮肤拔出注射笔，透明安全盖将自动弹出并盖上针头，锁定并保护住针头，为了避免任何损伤，请勿尝试触摸针头。
            </div>
            <div
              class="before:content-[''] before:flex before:mt-[13px] before:mr-2 before:w-[4px] before:h-[4px] before:rounded-full before:flex-shrink-0 before:bg-dot flex font-[Helvetica] text-[18px] text-black leading-[30px] text-left not-italic"
            >
              如果注射部位出血，请在注射部位轻轻按压洁净棉球或纱布，请勿摩擦注射部位。
            </div>
          </div>
          <div class="bg-[rgba(59,167,191,.15)] flex mt-[21px]">
            <div class="bg-dot w-[3px] flex-shrink-0 h-full"></div>
            <p
              class="font-[Helvetica] px-[15px] py-[12px] text-[14px] text-black leading-[24px] text-left not-italic"
            >
              注射笔仅供单次注射，使用后必须丢弃，可将其弃置于医疗废弃盒中，或按照医生、护士指示处理。
            </p>
          </div>
          <div
            class="w-full mt-[33px] flex items-center justify-center relative"
          >
            <img
              src="/images/img13.png"
              class="w-full h-full object-contain absolute left-0 moveTrash"
            />
            <img
              src="/images/img12.png"
              class="w-full h-full object-contain relative z-10"
            />
          </div>
        </div>
      </div>

      <div class="mt-[21px] flex flex-col items-center mb-[28px]">
        <p class="font-[OPPOSans-H] text-[#3BA7BF] mt-[5px]">
          如有任何疑问，请到医院咨询医生
        </p>
        <p class="font-[OPPOSans-H] text-[#3BA7BF] mt-[5px]">
          客户服务电话：4008285227
        </p>
        <p class="font-[OPPOSans-H] text-[#3BA7BF] mt-[5px]">
          周一至周五 9:00-17:00(节假日除外)
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { $aos } = useNuxtApp();

onMounted(() => {
  $aos().init({
    easing: "ease-out-back",
    duration: 2000,
    offset: 0,
  });
});
</script>
