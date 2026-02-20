import { useState } from "react";
import { motion } from "motion/react";
import {
    GitBranch,
    Code2,
    Eye,
    CheckCircle2,
    Terminal,
    Workflow,
    GitCommit,
    Upload,
    Boxes,
    Shield,
} from "lucide-react";

interface ProcessNode {
    id: string;
    title: string;
    subtitle: string;
    icon: any;
    color: string;
    glowColor: string;
    description: string;
    actions?: string[];
}

const processNodes: ProcessNode[] = [
    {
        id: "linear",
        title: "LINEAR",
        subtitle: "Task Management",
        icon: Boxes,
        color: "#ff006e",
        glowColor: "rgba(255, 0, 110, 0.5)",
        description: "Initialize development cycle",
        actions: ["Create Issue", "Assign Tasks", "Set Priority"],
    },
    {
        id: "worktree",
        title: "GIT WORKTREE",
        subtitle: "Branch Isolation",
        icon: GitBranch,
        color: "#00d9ff",
        glowColor: "rgba(0, 217, 255, 0.5)",
        description: "Parallel development streams",
        actions: ["Create Worktree", "Switch Context", "Isolate Changes"],
    },
    {
        id: "opencode",
        title: "OPENCODE",
        subtitle: "Plan & Build",
        icon: Code2,
        color: "#ffbe0b",
        glowColor: "rgba(255, 190, 11, 0.5)",
        description: "AI-assisted development",
        actions: ["Plan Architecture", "Generate Code", "Refactor"],
    },
    {
        id: "coderabbit",
        title: "CODERABBIT",
        subtitle: "Code Review",
        icon: Eye,
        color: "#b042ff",
        glowColor: "rgba(176, 66, 255, 0.5)",
        description: "Automated quality assurance",
        actions: ["Analyze Code", "Find Issues", "Suggest Improvements"],
    },
    {
        id: "lint-check",
        title: "LINT & CHECK",
        subtitle: "Quality Assurance",
        icon: Shield,
        color: "#ff6b35",
        glowColor: "rgba(255, 107, 53, 0.5)",
        description: "Static analysis and testing",
        actions: ["Type Check (ty)", "Lint (ruff)", "Run Tests (pytest)"],
    },
    {
        id: "git-ops",
        title: "GIT OPERATIONS",
        subtitle: "Version Control",
        icon: Terminal,
        color: "#00ff88",
        glowColor: "rgba(0, 255, 136, 0.5)",
        description: "Commit and deploy",
        actions: ["git add", "git commit", "git push"],
    },
];

export function DevProcessDiagram() {
    const [activeNode, setActiveNode] = useState<string | null>(null);
    const [hoveredNode, setHoveredNode] = useState<string | null>(null);

    return (
        <div className="min-h-screen w-full p-8 relative overflow-hidden">
            {/* Animated Background Grid */}
            <div className="absolute inset-0 opacity-20">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
            linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)
          `,
                        backgroundSize: "50px 50px",
                    }}
                />
            </div>

            {/* Scanline Effect */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{
                    backgroundPosition: ["0px 0px", "0px 100px"],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                }}
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 217, 255, 0.03) 2px, rgba(0, 217, 255, 0.03) 4px)",
                }}
            />

            {/* Title Section */}
            <div className="relative z-10 max-w-7xl mx-auto mb-16">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Workflow className="w-8 h-8 text-[#00d9ff]" />
                        <h1
                            className="text-5xl font-bold tracking-wider"
                            style={{
                                background:
                                    "linear-gradient(135deg, #00d9ff 0%, #ff006e 50%, #ffbe0b 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                textShadow: "0 0 30px rgba(0, 217, 255, 0.5)",
                            }}
                        >
                            DEVELOPMENT PROCESS
                        </h1>
                    </div>
                    <p className="text-[#00d9ff] text-sm tracking-[0.3em] opacity-70 font-mono">
                        [ WORKFLOW ARCHITECTURE v2.049 ]
                    </p>
                </motion.div>
            </div>

            {/* Process Flow Diagram */}
            <div className="relative z-10 max-w-7xl mx-auto h-dvh">
                {/* Feedback Loop - CodeRabbit to OpenCode */}
                <motion.svg
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="absolute top-0 left-0 w-full h-full pointer-events-none hidden lg:block"
                    style={{ zIndex: 1 }}
                >
                    <defs>
                        <linearGradient
                            id="feedbackGradient1"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                        >
                            <stop
                                offset="0%"
                                style={{
                                    stopColor: "#b042ff",
                                    stopOpacity: 0.8,
                                }}
                            />
                            <stop
                                offset="100%"
                                style={{
                                    stopColor: "#ffbe0b",
                                    stopOpacity: 0.8,
                                }}
                            />
                        </linearGradient>
                        <linearGradient
                            id="feedbackGradient2"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                        >
                            <stop
                                offset="0%"
                                style={{
                                    stopColor: "#ff6b35",
                                    stopOpacity: 0.8,
                                }}
                            />
                            <stop
                                offset="100%"
                                style={{
                                    stopColor: "#ffbe0b",
                                    stopOpacity: 0.8,
                                }}
                            />
                        </linearGradient>
                        <filter id="glow">
                            <feGaussianBlur
                                stdDeviation="3"
                                result="coloredBlur"
                            />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Feedback Loop 1: CodeRabbit (index 3) to OpenCode (index 2) */}
                    <motion.path
                        d="M 820 350 L 820 410 Q 820 430, 800 430 L 494 430 Q 474 430, 474 410 L 474 350"
                        fill="none"
                        stroke="url(#feedbackGradient1)"
                        strokeWidth="2"
                        strokeDasharray="8 4"
                        filter="url(#glow)"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                            delay: 1.5,
                            duration: 1.5,
                            ease: "easeInOut",
                        }}
                    />

                    {/* Animated arrow 1 */}
                    <motion.circle r="4" fill="#b042ff" filter="url(#glow)">
                        <animateMotion
                            dur="3s"
                            repeatCount="indefinite"
                            path="M 820 350 L 820 410 Q 820 430, 800 430 L 495 430 Q 475 430, 475 410 L 475 350"
                        />
                    </motion.circle>

                    {/* Arrow head 1 */}
                    <motion.path
                        d="M 464 340 L 469 350 L 459 350 Z"
                        fill="#ffbe0b"
                        filter="url(#glow)"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2, duration: 0.5 }}
                    />

                    {/* Feedback Loop 2: Lint & Check (index 4) to OpenCode (index 2) */}
                    <motion.path
                        d="M 1176 350 L 1176 460 Q 1176 490, 1146 490 L 494 490 Q 464 490, 464 460 L 464 350"
                        fill="none"
                        stroke="url(#feedbackGradient2)"
                        strokeWidth="2"
                        strokeDasharray="8 4"
                        filter="url(#glow)"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                            delay: 1.8,
                            duration: 1.5,
                            ease: "easeInOut",
                        }}
                    />

                    {/* Animated arrow 2 */}
                    <motion.circle r="4" fill="#ff6b35" filter="url(#glow)">
                        <animateMotion
                            dur="3.5s"
                            repeatCount="indefinite"
                            path="M 1176 350 L 1176 460 Q 1176 490, 1146 490 L 494 490 Q 464 490, 464 460 L 464 350"
                        />
                    </motion.circle>

                    {/* Arrow head 2 */}
                    <motion.path
                        d="M 474 340 L 479 350 L 469 350 Z"
                        fill="#ffbe0b"
                        filter="url(#glow)"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.3, duration: 0.5 }}
                    />

                    {/* Label 1 */}
                    <motion.text
                        x="735"
                        y="450"
                        fill="#b042ff"
                        fontSize="11"
                        fontFamily="monospace"
                        textAnchor="middle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.8 }}
                        transition={{ delay: 2.5, duration: 0.5 }}
                    >
                        FEEDBACK LOOP
                    </motion.text>

                    {/* Label 2 */}
                    <motion.text
                        x="900"
                        y="510"
                        fill="#ff6b35"
                        fontSize="11"
                        fontFamily="monospace"
                        textAnchor="middle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.8 }}
                        transition={{ delay: 2.8, duration: 0.5 }}
                    >
                        FEEDBACK LOOP
                    </motion.text>
                </motion.svg>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4 relative">
                    {processNodes.map((node, index) => (
                        <div key={node.id} className="flex items-center gap-4">
                            {/* Process Node */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    delay: index * 0.15,
                                    duration: 0.5,
                                }}
                                onHoverStart={() => setHoveredNode(node.id)}
                                onHoverEnd={() => setHoveredNode(null)}
                                onClick={() =>
                                    setActiveNode(
                                        activeNode === node.id ? null : node.id,
                                    )
                                }
                                className="relative cursor-pointer group"
                            >
                                {/* Outer Glow Ring */}
                                <motion.div
                                    className="absolute inset-0 rounded-lg blur-xl"
                                    animate={{
                                        opacity:
                                            hoveredNode === node.id ||
                                            activeNode === node.id
                                                ? 0.6
                                                : 0.2,
                                        scale:
                                            hoveredNode === node.id ||
                                            activeNode === node.id
                                                ? 1.1
                                                : 1,
                                    }}
                                    transition={{ duration: 0.3 }}
                                    style={{ backgroundColor: node.glowColor }}
                                />

                                {/* Card Container */}
                                <motion.div
                                    className="relative w-64 h-80 rounded-lg overflow-hidden"
                                    style={{
                                        background: `linear-gradient(135deg, rgba(15, 15, 25, 0.9), rgba(20, 20, 35, 0.9))`,
                                        border: `1px solid ${hoveredNode === node.id || activeNode === node.id ? node.color : "rgba(255, 255, 255, 0.1)"}`,
                                        boxShadow: `0 0 20px ${node.glowColor}`,
                                    }}
                                    animate={{
                                        scale:
                                            hoveredNode === node.id ? 1.05 : 1,
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Corner Accents */}
                                    <div
                                        className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 opacity-50"
                                        style={{ borderColor: node.color }}
                                    />
                                    <div
                                        className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 opacity-50"
                                        style={{ borderColor: node.color }}
                                    />
                                    <div
                                        className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 opacity-50"
                                        style={{ borderColor: node.color }}
                                    />
                                    <div
                                        className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 opacity-50"
                                        style={{ borderColor: node.color }}
                                    />

                                    {/* Icon Section */}
                                    <div className="p-6 flex flex-col items-center">
                                        <motion.div
                                            className="relative mb-4"
                                            animate={{
                                                rotate:
                                                    hoveredNode === node.id
                                                        ? 360
                                                        : 0,
                                            }}
                                            transition={{ duration: 0.8 }}
                                        >
                                            <div
                                                className="absolute inset-0 blur-md rounded-full"
                                                style={{
                                                    backgroundColor:
                                                        node.glowColor,
                                                }}
                                            />
                                            <div
                                                className="relative w-20 h-20 rounded-full flex items-center justify-center"
                                                style={{
                                                    background: `radial-gradient(circle, ${node.glowColor}, transparent)`,
                                                    border: `2px solid ${node.color}`,
                                                }}
                                            >
                                                <node.icon
                                                    className="w-10 h-10"
                                                    style={{
                                                        color: node.color,
                                                    }}
                                                />
                                            </div>
                                        </motion.div>

                                        {/* Title */}
                                        <h3
                                            className="text-xl font-bold tracking-wider mb-1"
                                            style={{ color: node.color }}
                                        >
                                            {node.title}
                                        </h3>
                                        <p className="text-xs text-gray-400 tracking-wide font-mono mb-4">
                                            {node.subtitle}
                                        </p>

                                        {/* Description */}
                                        <p className="text-sm text-gray-300 text-center mb-4 px-2">
                                            {node.description}
                                        </p>

                                        {/* Actions */}
                                        <div className="space-y-2 w-full px-4">
                                            {node.actions?.map(
                                                (action, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        initial={{
                                                            opacity: 0,
                                                            x: -10,
                                                        }}
                                                        animate={{
                                                            opacity:
                                                                activeNode ===
                                                                node.id
                                                                    ? 1
                                                                    : 0.5,
                                                            x: 0,
                                                        }}
                                                        transition={{
                                                            delay: idx * 0.1,
                                                        }}
                                                        className="text-xs font-mono text-gray-400 flex items-center gap-2"
                                                    >
                                                        <CheckCircle2
                                                            className="w-3 h-3"
                                                            style={{
                                                                color: node.color,
                                                            }}
                                                        />
                                                        <span>{action}</span>
                                                    </motion.div>
                                                ),
                                            )}
                                        </div>
                                    </div>

                                    {/* Status Indicator */}
                                    <motion.div
                                        className="absolute top-4 right-4 w-2 h-2 rounded-full"
                                        style={{ backgroundColor: node.color }}
                                        animate={{
                                            opacity: [0.3, 1, 0.3],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    />

                                    {/* Index Number */}
                                    <div
                                        className="absolute bottom-4 right-4 text-4xl font-bold opacity-10"
                                        style={{ color: node.color }}
                                    >
                                        {String(index + 1).padStart(2, "0")}
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Arrow Connector */}
                            {index < processNodes.length - 1 && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        delay: index * 0.15 + 0.3,
                                        duration: 0.5,
                                    }}
                                    className="hidden lg:flex items-center"
                                >
                                    <div className="relative w-16 h-0.5 bg-gradient-to-r from-[#ff6b35] to-transparent">
                                        <motion.div
                                            className="absolute right-0 top-1/2 -translate-y-1/2"
                                            animate={{
                                                x: [0, 10, 0],
                                                opacity: [0.5, 1, 0.5],
                                            }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                            }}
                                        >
                                            <div
                                                className="w-0 h-0 border-t-4 border-b-4 border-l-8"
                                                style={{
                                                    borderTopColor:
                                                        "transparent",
                                                    borderBottomColor:
                                                        "transparent",
                                                    borderLeftColor: "#ff6b35",
                                                }}
                                            />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Bottom Info Panel */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="mt-56 p-6 rounded-lg border border-[#00d9ff]/30 bg-gradient-to-br from-[#0f0f19]/80 to-[#141423]/80 backdrop-blur-sm"
                >
                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-6">
                        {processNodes.map((node) => (
                            <div
                                key={node.id}
                                className="p-3 rounded border border-white/10 bg-black/20"
                            >
                                <div className="text-xs text-gray-500 font-mono mb-1">
                                    {node.subtitle}
                                </div>
                                <div
                                    className="text-lg font-bold"
                                    style={{ color: node.color }}
                                >
                                    READY
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="mt-8 text-center text-xs text-gray-600 font-mono tracking-wider"
                >
                    [ SYSTEM OPERATIONAL // CLICK NODES FOR DETAILS ]
                </motion.div>
            </div>
        </div>
    );
}
