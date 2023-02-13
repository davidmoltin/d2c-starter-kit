import { withStoreStaticProps } from "../lib/store-wrapper-ssg";
import { Box, Text, UnorderedList, ListItem } from "@chakra-ui/react";
import { globalBaseWidth } from "../styles/theme";

const terms = [
  {
    important:
      'IMPORTANT - By accessing, browsing or using any part of the "elasticpath.com" websites (the "Websites"), you agree to be bound by the terms and conditions set out below. If you do not agree with these Terms of Use, you may not use the Websites.',
  },
  {
    title: "Intellectual Property",
    paragraphs: [
      "The contents of the Websites, and the materials made available through them, are protected by copyright, trademark and other intellectual property laws and international treaties. Elastic Path either owns or has obtained the rights to use the content and materials on the Websites.",
      'Except as expressly provided below under the heading "Use of Websites", you may not copy, reproduce, republish, download, upload, post, transmit, distribute or create derivative works from any of the content in the Websites, without Elastic Path\'s prior written consent.',
    ],
  },
  {
    title: "User ID and Password",
    paragraphs: [
      'Many areas of the Websites are available to registered users only and are password protected ("Protected Areas"). If you wish to access a Protected Area:',
    ],
    list: [
      "You will register for the Protected Area using accurate, complete and current information.",
      "You will not provide false identity information to gain access to Protected Areas.",
      "You will not allow any other person to use your User ID and password.",
      "You will notify Elastic Path of any unauthorized use of your User ID and password.",
    ],
  },
  {
    title: "Use of Websites",
    paragraphs: [
      "General Browsing and Use: Elastic Path grants you a limited license to access and use (display, print, download) the Web pages and content within the Websites solely on your computer and for your own personal, non-commercial use, provided that:",
    ],
    list: [
      "You do not modify the content displayed on the Websites; and",
      "You retain and keep intact all copyright, trademark or other proprietary notices.",
    ],
  },
  {
    paragraphs: [
      'Accessing Materials: Where software, code, files, documentation, tutorials, demos or other materials ("Materials") are made available for access, use or download from the Websites, you agree to abide by any terms, conditions or notices contained in such Materials. You acknowledge and agree that:',
    ],
    list: [
      "Materials are provided for educational, experimental, non-production use only;",
      'Materials are provided "as is" without any warranty;',
      "Materials are used by you at your own risk;",
      "Elastic Path has no obligation to maintain or support any Materials; and",
      "Elastic Path does not promise that Materials will operate or function properly, or with Elastic Path's software products.",
    ],
  },
  {
    paragraphs: [
      "Accessing Software Products: If you have entered into a written agreement with Elastic Path to license Elastic Path software products, such software products may be made available for download from Protected Areas of the Websites. Your access to and use of Elastic Path software products will be governed by the terms of your written agreement.",
    ],
  },
  {
    paragraphs: [
      "Posting Materials: Where you are permitted to post or upload materials to the Websites:",
    ],
    list: [
      "You will only post materials that you own or have a right to post, distribute or display. Elastic Path is not responsible for the content of the postings made by you or any third party and is not obliged to review, edit or filter the postings; however, Elastic Path reserves the right to modify, reject or remove any material posted on the Websites at any time in its discretion.",
      "You grant Elastic Path a royalty-free and worldwide right to use, reproduce, modify, adapt, publish, translate, create derivate works from, distribute, and display your posted content in any media.",
      "You agree to defend Elastic Path from any third party claim that may arise as a result of material you post and you will indemnify Elastic Path from any damages and expenses that may result from such claim.",
    ],
  },
  {
    title: "Restrictions",
    paragraphs: [
      "Except for the limited license provided above, Elastic Path does not grant you any express or implied rights or licenses under any patents, trademarks, copyrights or other proprietary or intellectual property rights.",
      "You agree that you will not:",
    ],
    list: [
      "license, sell, distribute or otherwise commercially exploit the Websites or any Materials, information, software or content posted or contained in it;",
      'create internet "links" to the Websites or "frame" or "mirror" any content on any other server or wireless or internet-based device;',
      "post or transmit any material that is unlawful, harmful, defamatory, obscene, indecent, profane, discriminating, harassing, threatening, infringing of intellectual property, invasive of privacy, or otherwise objectionable;",
      'post or transmit any unsolicited promotional material (commercial and non-commercial), including "junk mail", "spam" and "chain letters";',
      "post or transmit any material that contains viruses, corrupted files or any software or programs that may damage or interrupt the software, hardware or telecommunications equipment of Elastic Path or others;",
      "harvest or otherwise collect or reveal information about others, including names and email addresses;",
      "probe, scan or test the vulnerability of the Websites, or breach the security or authentication measures on the Websites;",
      "take any action that imposes an unreasonable or disproportionately large load on the infrastructure of the Websites, or any systems or networks connected to the Websites;",
      "use any device, software or routine to interfere or attempt to interfere with the proper working of the Websites or any transaction being conducted on the Websites, or with any other person’s use of the Websites;",
      "forge headers or otherwise manipulate identifiers in order to disguise the origin of any message or transmittal you send to Elastic Path on or through the Websites; or",
      "pretend that you are, or that you represent, someone else, or impersonate any other individual or entity.",
    ],
  },
  {
    title: "Confidential Information",
    paragraphs: [
      "Information and content you send, post or upload to or through the Websites will be deemed NOT to be confidential or proprietary. Except as expressly agreed in a written agreement between you and Elastic Path, Elastic Path has no obligation to protect or secure any information provided by you through the Websites. Personal information is governed by Elastic Path's Privacy Policy.",
      'The Protected Areas of the Websites may contain Confidential Information of Elastic Path. "Confidential Information" is anything which Elastic Path does not make generally available to the public without restriction, and which it considers to be proprietary. Confidential Information includes, but is not limited to: (a) software, code or other technology; (b) technical information about Elastic Path products, including product roadmaps; (c) personally identifiable information about an individual; (d) material or information which, given its nature, should reasonably be considered to be confidential; and (e) material or information which is marked "confidential".',
    ],
    list: [
      "You will maintain the confidentiality of all Confidential Information you obtain or access.",
      "You will use Confidential Information solely for the purpose for which it has been disclosed to you.",
      "You will not disseminate or distribute Confidential Information.",
      "You will not remove any proprietary notices contained in or on any Confidential Information.",
    ],
  },
  {
    title: "Disclaimer",
    paragraphs: [
      'Information and materials on the Websites are provided "as is" and are not promised or guaranteed to be correct, current or complete. The Websites may contain technical inaccuracies or typographical errors. Elastic Path assumes no responsibility (and expressly disclaims responsibility) for updating the Websites to keep information current or to ensure the accuracy or completeness of any posted information. Accordingly, you should confirm the accuracy and completeness of all information and materials before making any decision related to any products, services or other matters described in the Websites.',
      "YOU EXPRESSLY UNDERSTAND AND AGREE THAT USE OF THE WEBSITES IS AT YOUR SOLE RISK. ELASTIC PATH MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, QUALITY DURABILITY OR NON-INFRINGEMENT.",
      "ELASTIC PATH DOES NOT REPRESENT OR WARRANT THAT THE WEBSITES WILL BE UNINTERRUPTED, TIMELY, SECURE OR FREE FROM ERRORS, VIRUSES OR OTHER DEFECTS.",
      "YOU ASSUME ALL RISKS IN THE TRANSMISSION OF ANY MATERIALS, DATA OR INFORMATION TO AND FROM ELASTIC PATH, INCLUDING ANY INTERCEPTION BY THIRD PARTIES.",
    ],
  },
  {
    title: "Links to Other Websites",
    paragraphs: [
      "Links on the Websites to third party Websites are provided for your convenience only. Elastic Path is not responsible for and does not endorse, control or make any representations or warranties as to the content, products or services offered from third party Websites. You are responsible for complying with the terms of use for such third party Websites.",
    ],
  },
  {
    title: "Applicable Law",
    paragraphs: [
      "The Websites are controlled by Elastic Path Software Inc. from its offices in Vancouver, Canada. All matters relating to your access to or use of the Websites will be governed by Canadian federal law or the laws of the Province of British Columbia. You agree to submit to the jurisdiction of the courts of British Columbia. Elastic Path makes no representation that the Websites or its contents comply with the laws of jurisdictions outside Canada.",
    ],
  },
  {
    title: "Amendments",
    paragraphs: [
      "Elastic Path retains the right to amend the above terms at any time, including the right to revoke any permissions.",
    ],
  },
];

const Terms = () => {
  return (
    <Box maxWidth={globalBaseWidth} margin="auto" padding={8}>
      <Text fontSize="3xl">Elastic Path Websites - Terms of Use</Text>
      <br />
      <br />
      <Text>{terms[0].important}</Text>
      <br />
      {terms.map((item, index) => (
        <Box key={index}>
          <Text fontWeight="bold">{item.title}</Text>
          {item.paragraphs &&
            item.paragraphs.map((paragraph, index) => (
              <Box key={index}>
                <Text>{paragraph}</Text>
                <br />
              </Box>
            ))}
          {item.list &&
            item.list.map((listItem, index) => (
              <Box key={index} paddingLeft={6}>
                <UnorderedList>
                  <ListItem>{listItem}</ListItem>
                </UnorderedList>
                <br />
              </Box>
            ))}
        </Box>
      ))}
    </Box>
  );
};

export default Terms;

export const getServerSideProps = withStoreStaticProps();
