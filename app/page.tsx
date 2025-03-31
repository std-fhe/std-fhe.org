import Link from 'next/link';
import { Section, H1, H2, P, Ul, Li } from "@/components/elements";

const linkStyle = "underline text-blue-600 hover:text-blue-800";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 p-6 md:p-12 lg:p-24">
      <div className="w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto space-y-12">
        <H1>C++ FHE Standard</H1>

        <Section>
          <H2>What is Fully-homomorphic Encryption (FHE)?</H2>

          <P>When processing data, it may be in one of three states: "at rest"
          in a storage medium like a hard drive, "in transit" over a
          communication link between systems, or "in use" while a CPU or other
            computation resource is processing it.</P>
          <P>While encryption is commonly used for data at rest and in transit,
            processing data typically requires decrypting it. When the data is
          decrypted, it is vulnerable to theft or unauthorized access.</P>
          <P>Fully-homomorphic encryption is a mathematical scheme that permits
          performing arithmetic operations on ciphertext without decrypting
          it.</P>
          <P>The ability of FHE to protect data is increasingly important in a
          world where there is only increasing surveillance capitalism, rising
          authoritarianism using surveillance and censorship on citizens, and
          seriously destructive cybersecurity breaches by nation states and
          organized criminal gangs.</P>
        </Section>

        <Section>
          <H2>Why is a C++ Standard for FHE Necessary?</H2>

          <P>The computational complexity of FHE is so large that commercial viability is unlikely without hardware acceleration.</P>
          <P>Currently, there are four classes of hardware compute resources being used with FHE:</P>
          <Ul>
            <Li>CPUs</Li>
            <Li>GPUs</Li>
            <Li>FPGAs</Li>
            <Li>ASICs</Li>
          </Ul>

          <P>Each type of compute resource requires significant effort to create library or compilers to utilize. Additionally, the field is nascent, so many things are still being discovered. There's a trade-off between accelerating commercial viability of FHE and performing the basic research necessary to discover how to accelerate FHE computation to support commercial development.</P>

          <P>A C++ standard for FHE along with a reference implementation in LLVM will provide the most leverage at the intersection of the developing commercial market and the necessary research in schemes and hardware acceleration.</P>
        </Section>

        <Section>
          <H2>Why is the Library Programming Model Not Sufficient?</H2>

          <P>There are currently several libraries for FHE schemes:</P>
          <Ul>
            <Li><Link className={linkStyle} href="https://github.com/tuneinsight/lattigo">
              Lattigo
            </Link></Li>
            <Li><Link className={linkStyle} href="https://openfhe.org">
              OpenFHE
            </Link></Li>
            <Li><Link className={linkStyle} href="https://www.ckks.org">
              HEaaN
            </Link></Li>
            <Li><Link className={linkStyle} href="https://github.com/zama-ai/tfhe-rs">
              TFHE-rs
            </Link></Li>
          </Ul>

          <P>Different language ecosystems have always been a challenge when developing software. Often when a library is written in C/C++, bindings are used to enable the functionality in another programming language. In this way, the effort to create the library can be reused across these other language ecosystems.</P>

          <P>In the case of FHE, the inherent complexity of being a distributed system architecture with complex cryptographic requirements and significant data processing challenges, in addition to the necessary hardware acceleration described above, impose such a large cost on the ecosystem that standardization and reuse are likely critical to the development of the industry in the near and medium term.</P>
        </Section>

        <Section>
          <H2>What About Corporate Sponsorship?</H2>
          <P>Corporate sponsorship creates misaligned incentives and the
          possible appearance of favoritism or unequal influence. As such, this
          project will refuse any offers of corporate sponsorship.</P>

          <P>However, as an economic necessity, people working hard on
          providing a community good, like this standard, can only contribute
          so much of their time and energy without receiving some sort of
          compensation.</P>

          <P>As such, companies are encouraged to contribute by providing paid
          time to employees who are well-situated to provide their expertise to
          this effort.</P>

          <P>Additionally, individual contributions are welcome and much
          appreciated.</P>
        </Section>

        <Section>
          <H2>How to Contribute?</H2>

          <P>The FHE C++ standardization effort is being coordinated at the <Link className={linkStyle} href="https://github.com/std-fhe">std-fhe GitHub organization</Link>.</P>
        </Section>

        <footer className="pt-12 border-t text-center text-sm text-gray-500">
          Public Domain
        </footer>
      </div>
    </main>
  );
}
