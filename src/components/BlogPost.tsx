import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MonolithicDiagram } from "@/components/diagrams/MonolithicDiagram";
import { MicroFrontendDiagram } from "@/components/diagrams/MicroFrontendDiagram";
import { ModuleFederationDiagram } from "@/components/diagrams/ModuleFederationDiagram";

const BlogPost = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary to-purple-600 text-primary-foreground">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 text-sm font-medium">
              System Architecture
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Micro Frontend Architecture
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              A comprehensive guide to modern frontend architecture patterns and the evolution from monolithic to micro frontend systems
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-primary-foreground/80">
              <span>Published: {new Date().toLocaleDateString()}</span>
              <span>•</span>
              <span>15 min read</span>
              <span>•</span>
              <span>Advanced</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Author Section */}
          <div className="bg-muted/50 rounded-lg p-6 mb-8 border-l-4 border-primary">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-lg">
                APS
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Avijit Pratap Singh</h3>
                <p className="text-muted-foreground text-sm mb-2">Architect | Engineering Leader</p>
                <a 
                  href="https://www.linkedin.com/in/avijit-pratap-singh/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 text-sm font-medium flex items-center gap-1"
                >
                  Connect on LinkedIn →
                </a>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <Card className="p-6 mb-12 border-border-subtle">
            <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#introduction" className="hover:text-primary transition-colors">1. Introduction to Micro Frontends</a></li>
              <li><a href="#monolithic-vs-micro" className="hover:text-primary transition-colors">2. Monolithic vs Micro Frontend Architecture</a></li>
              <li><a href="#system-design" className="hover:text-primary transition-colors">3. System Design Diagrams</a></li>
              <li><a href="#migration-strategy" className="hover:text-primary transition-colors">4. Migration Strategy & Architecture Changes</a></li>
              <li><a href="#tools-technologies" className="hover:text-primary transition-colors">5. Tools & Technologies</a></li>
              <li><a href="#implementation" className="hover:text-primary transition-colors">6. Implementation Patterns</a></li>
              <li><a href="#conclusion" className="hover:text-primary transition-colors">7. Conclusion</a></li>
            </ul>
          </Card>

          {/* Introduction */}
          <section id="introduction" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Introduction to Micro Frontends</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6 text-foreground">
                Micro frontend architecture represents a paradigm shift in how we structure and deploy large-scale web applications. 
                Just as microservices transformed backend development, micro frontends are revolutionizing frontend architecture by 
                breaking down monolithic frontend applications into smaller, more manageable pieces.
              </p>
              
              <div className="bg-muted p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-3">Key Principles of Micro Frontends</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Technology Agnostic:</strong> Different teams can use different frameworks and technologies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Independent Deployment:</strong> Each micro frontend can be deployed independently</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Team Autonomy:</strong> Small, cross-functional teams own entire features end-to-end</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Incremental Migration:</strong> Gradual transition from legacy systems</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <Separator className="my-12" />

          {/* Monolithic vs Micro Frontend */}
          <section id="monolithic-vs-micro" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Monolithic vs Micro Frontend Architecture</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-destructive">Monolithic Architecture</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Characteristics:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Single deployable unit</li>
                      <li>• Shared codebase and dependencies</li>
                      <li>• Centralized build and deployment</li>
                      <li>• Tight coupling between features</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Challenges:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Large bundle sizes</li>
                      <li>• Technology lock-in</li>
                      <li>• Coordination overhead</li>
                      <li>• Single point of failure</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Micro Frontend Architecture</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Characteristics:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Multiple deployable units</li>
                      <li>• Independent codebases</li>
                      <li>• Distributed build and deployment</li>
                      <li>• Loose coupling between features</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Benefits:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Optimized bundle sizes</li>
                      <li>• Technology diversity</li>
                      <li>• Team independence</li>
                      <li>• Fault isolation</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          <Separator className="my-12" />

          {/* System Design Diagrams */}
          <section id="system-design" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">System Design Diagrams</h2>
            
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Monolithic Frontend Architecture</h3>
                <Card className="p-6">
                  <MonolithicDiagram />
                  <p className="mt-4 text-sm text-muted-foreground">
                    Traditional monolithic architecture with tightly coupled frontend components and shared dependencies.
                  </p>
                </Card>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Micro Frontend Architecture</h3>
                <Card className="p-6">
                  <MicroFrontendDiagram />
                  <p className="mt-4 text-sm text-muted-foreground">
                    Micro frontend architecture with independent teams, technologies, and deployment pipelines.
                  </p>
                </Card>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Module Federation Architecture</h3>
                <Card className="p-6">
                  <ModuleFederationDiagram />
                  <p className="mt-4 text-sm text-muted-foreground">
                    Module Federation enables runtime sharing and loading of micro frontends with independent webpack builds.
                  </p>
                </Card>
              </div>
            </div>
          </section>

          <Separator className="my-12" />

          {/* Migration Strategy */}
          <section id="migration-strategy" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Migration Strategy & Architecture Changes</h2>
            
            <div className="space-y-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Strangler Fig Pattern</h3>
                <p className="mb-4 text-muted-foreground">
                  The most effective approach for migrating from monolithic to micro frontend architecture is the Strangler Fig pattern, 
                  which allows for gradual migration without disrupting existing functionality.
                </p>
                <div className="bg-code-bg text-code-text p-6 rounded-lg font-mono text-sm">
                  <pre>{`
PHASE 1: Initial Setup
┌─────────────────┐    ┌─────────────────┐
│ Legacy Monolith │────│ Migration Proxy │
└─────────────────┘    │                 │
                       │ Routes:         │
                       │ /products   ──────────┐
                       │ /dashboard  ────┐     │
                       │ /*          ──┐ │     │
                       └───────────────┘ │     │
                                        │     │
PHASE 2: Gradual Migration             │     │
                                        │     │
                          ┌─────────────▼──┐  │
                          │ New Micro FE 1 │  │
                          │   /dashboard   │  │
                          └────────────────┘  │
                                              │
                          ┌─────────────────▼─┐
                          │  New Micro FE 2   │
                          │    /products      │
                          └───────────────────┘

PHASE 3: Complete Migration
All legacy routes migrated to micro frontends
                  `}</pre>
                </div>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Architecture Changes Required</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">1. Build System</h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Migrate from single build to distributed builds</li>
                        <li>• Implement Module Federation or similar</li>
                        <li>• Set up independent CI/CD pipelines</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">2. Deployment Strategy</h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Independent deployment mechanisms</li>
                        <li>• Versioning strategy for micro frontends</li>
                        <li>• Blue-green or canary deployments</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">3. State Management</h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Distributed state management</li>
                        <li>• Event-driven communication</li>
                        <li>• Shared state libraries</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Implementation Steps</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold">Phase 1: Planning</h4>
                      <p className="text-sm text-muted-foreground">Define boundaries, team structure, and technical strategy</p>
                    </div>
                    <div className="border-l-4 border-secondary pl-4">
                      <h4 className="font-semibold">Phase 2: Infrastructure</h4>
                      <p className="text-sm text-muted-foreground">Set up build tools, deployment pipelines, and shared libraries</p>
                    </div>
                    <div className="border-l-4 border-accent pl-4">
                      <h4 className="font-semibold">Phase 3: Migration</h4>
                      <p className="text-sm text-muted-foreground">Gradual extraction of features using Strangler Fig pattern</p>
                    </div>
                    <div className="border-l-4 border-muted pl-4">
                      <h4 className="font-semibold">Phase 4: Optimization</h4>
                      <p className="text-sm text-muted-foreground">Performance tuning, monitoring, and refinement</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          <Separator className="my-12" />

          {/* Tools & Technologies */}
          <section id="tools-technologies" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Tools & Technologies</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-primary">Module Federation</h3>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">Webpack 5&apos;s built-in solution for micro frontends</p>
                  <div className="bg-code-bg text-code-text p-3 rounded text-xs">
                    <code>{`// webpack.config.js
new ModuleFederationPlugin({
  name: 'shell',
  remotes: {
    mfe1: 'mfe1@http://localhost:3001',
    mfe2: 'mfe2@http://localhost:3002'
  }
})`}</code>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-primary">Single-SPA</h3>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">Framework for bringing together multiple micro frontends</p>
                  <div className="bg-code-bg text-code-text p-3 rounded text-xs">
                    <code>{`// root-config.js
registerApplication({
  name: '@org/navbar',
  app: () => import('@org/navbar'),
  activeWhen: ['/']
})`}</code>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-primary">Bit</h3>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">Platform for component-driven development</p>
                  <div className="bg-code-bg text-code-text p-3 rounded text-xs">
                    <code>{`// Export components
bit add src/components/*
bit tag --all
bit export`}</code>
                  </div>
                </div>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Container Technologies</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">iframe-based Integration</h4>
                    <p className="text-sm text-muted-foreground">Simple but limited approach with natural isolation</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">JavaScript Integration</h4>
                    <p className="text-sm text-muted-foreground">Runtime integration with shared dependencies</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Web Components</h4>
                    <p className="text-sm text-muted-foreground">Standard-based encapsulation with custom elements</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Supporting Tools</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Nx</h4>
                    <p className="text-sm text-muted-foreground">Monorepo tool with micro frontend support</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Lerna</h4>
                    <p className="text-sm text-muted-foreground">Tool for managing JavaScript projects with multiple packages</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Rush</h4>
                    <p className="text-sm text-muted-foreground">Scalable monorepo manager for large-scale projects</p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          <Separator className="my-12" />

          {/* Implementation Patterns */}
          <section id="implementation" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Implementation Patterns</h2>
            
            <div className="space-y-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">1. Build-time Integration</h3>
                <p className="mb-4 text-muted-foreground">
                  Micro frontends are packaged together before deployment, creating a single deployable artifact.
                </p>
                <div className="bg-code-bg text-code-text p-4 rounded">
                  <code className="text-sm">{`// package.json
{
  "dependencies": {
    "@company/header": "^1.2.3",
    "@company/sidebar": "^2.1.0",
    "@company/main-content": "^1.5.2"
  }
}`}</code>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">2. Runtime Integration</h3>
                <p className="mb-4 text-muted-foreground">
                  Micro frontends are loaded and integrated at runtime, enabling independent deployment.
                </p>
                <div className="bg-code-bg text-code-text p-4 rounded">
                  <code className="text-sm">{`// Dynamic import
const loadMicroFrontend = async (name) => {
  const module = await import(\`\${microfrontendUrl}/\${name}\`);
  return module.default;
};`}</code>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">3. Server-side Integration</h3>
                <p className="mb-4 text-muted-foreground">
                  Micro frontends are composed on the server before being sent to the client.
                </p>
                <div className="bg-code-bg text-code-text p-4 rounded">
                  <code className="text-sm">{`// Server-side composition
app.get('/', async (req, res) => {
  const [header, content, footer] = await Promise.all([
    fetchMicrofrontend('header'),
    fetchMicrofrontend('content'),
    fetchMicrofrontend('footer')
  ]);
  res.send(composePage(header, content, footer));
});`}</code>
                </div>
              </Card>
            </div>
          </section>

          <Separator className="my-12" />

          {/* Conclusion */}
          <section id="conclusion" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Micro frontend architecture represents a significant evolution in how we build and maintain large-scale web applications. 
                While it introduces complexity in terms of coordination and tooling, the benefits of team autonomy, technology diversity, 
                and independent deployment make it an attractive option for organizations with multiple development teams.
              </p>
              
              <Card className="p-6 bg-primary/5">
                <h3 className="text-xl font-semibold mb-4">Key Takeaways</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Start Small:</strong> Begin with a pilot project to understand the complexities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Team Structure:</strong> Ensure teams are truly cross-functional and autonomous</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Tooling Investment:</strong> Invest heavily in shared tooling and infrastructure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Gradual Migration:</strong> Use patterns like Strangler Fig for safe migration</span>
                  </li>
                </ul>
              </Card>
              
              <p className="text-muted-foreground">
                The success of micro frontend architecture depends heavily on organizational readiness, team structure, and commitment to 
                the additional complexity it introduces. When implemented thoughtfully, it can provide significant benefits in terms of 
                scalability, maintainability, and developer productivity.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;